export type MicroFrontendEvent = {
  type: 'NAVIGATION_CHANGE';
  payload: unknown;
};
declare class EventBus {
  private listeners;
  on(eventType: MicroFrontendEvent['type'], listener: (event: MicroFrontendEvent) => void): void;
  off(eventType: MicroFrontendEvent['type'], listener: (event: MicroFrontendEvent) => void): void;
  emit(event: MicroFrontendEvent): void;
}
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
declare const _default: {
  on: (eventType: 'NAVIGATION_CHANGE', listener: (event: MicroFrontendEvent) => void) => void;
  off: (eventType: 'NAVIGATION_CHANGE', listener: (event: MicroFrontendEvent) => void) => void;
  emit: (event: MicroFrontendEvent) => void;
};
export default _default;
//# sourceMappingURL=eventBus.d.ts.map
