import type { NavigationEvent } from '../store/footerStore';

declare global {
  interface Window {
    eventBus?: {
      emit: (event: NavigationEvent) => void;
    };
  }
}

export {};
