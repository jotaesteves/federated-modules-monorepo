export type MicroFrontendEvent = {
  type: 'NAVIGATION_CHANGE';
  payload: unknown;
};

// Simple event bus implementation with typed events
class EventBus {
  private listeners: Record<string, Array<(event: MicroFrontendEvent) => void>> = {};

  on(eventType: MicroFrontendEvent['type'], listener: (event: MicroFrontendEvent) => void) {
    this.listeners[eventType] = this.listeners[eventType] || [];
    this.listeners[eventType].push(listener);
  }

  off(eventType: MicroFrontendEvent['type'], listener: (event: MicroFrontendEvent) => void) {
    const arr = this.listeners[eventType];
    if (!arr) return;
    this.listeners[eventType] = arr.filter((l) => l !== listener);
  }

  emit(event: MicroFrontendEvent) {
    const arr = this.listeners[event.type] || [];
    arr.forEach((listener) => {
      listener(event);
    });
  }
}

// Create a singleton bus and expose on window for backwards compatibility
const eventBus = new EventBus();

declare global {
  interface Window {
    microFrontendEventBus?: {
      on: (type: MicroFrontendEvent['type'], listener: (event: MicroFrontendEvent) => void) => void;
      off: (
        type: MicroFrontendEvent['type'],
        listener: (event: MicroFrontendEvent) => void
      ) => void;
      emit: (event: MicroFrontendEvent) => void;
    };
  }
}

if (typeof window !== 'undefined') {
  // If a bus already exists, prefer it; otherwise assign ours
  window.microFrontendEventBus = window.microFrontendEventBus || {
    on: (...args) => eventBus.on(...args),
    off: (...args) => eventBus.off(...args),
    emit: (event) => eventBus.emit(event)
  };
}

export default {
  on: (...args: Parameters<EventBus['on']>) => eventBus.on(...args),
  off: (...args: Parameters<EventBus['off']>) => eventBus.off(...args),
  emit: (...args: Parameters<EventBus['emit']>) => eventBus.emit(...args)
};
