import { useState, useCallback, useEffect } from 'react';

// Global type declarations
declare global {
  interface Window {
    globalMicroFrontendStore?: {
      getState: () => MicroFrontendState & {
        navigateTo: (page: string) => void;
        setCurrentPage: (page: string) => void;
        setUser: (userData: Partial<MicroFrontendState['user']>) => void;
        setTheme: (theme: MicroFrontendState['theme']) => void;
        setSharedData: (key: string, value: unknown) => void;
        getSharedData: (key: string) => unknown;
        setLoading: (isLoading: boolean) => void;
      };
      subscribe: (listener: () => void) => () => void;
    };
    microFrontendEventBus?: {
      emit: (event: { type: string; payload: unknown }) => void;
    };
  }
}

// This is a simplified version for the microfrontend
// It will use the global store when available, fallback to local when standalone
export interface MicroFrontendState {
  currentPage: string;
  user: {
    name?: string;
    email?: string;
    isAuthenticated: boolean;
  };
  theme: 'light' | 'dark';
  sharedData: Record<string, unknown>;
  isLoading: boolean;
}

// Simple local state management for standalone mode
const createLocalState = () => {
  let state: MicroFrontendState = {
    currentPage: 'home',
    user: { isAuthenticated: false },
    theme: 'dark',
    sharedData: {},
    isLoading: false,
  };

  const listeners: Array<() => void> = [];

  const setState = (newState: Partial<MicroFrontendState>) => {
    state = { ...state, ...newState };
    listeners.forEach((listener) => listener());
  };

  const subscribe = (listener: () => void) => {
    listeners.push(listener);
    return () => {
      const index = listeners.indexOf(listener);
      if (index > -1) {
        listeners.splice(index, 1);
      }
    };
  };

  return {
    getState: () => state,
    setState,
    subscribe,
  };
};

// Global local store instance
const localStore = createLocalState();

// Smart hook that uses global store when available, local when standalone
export const useMicroFrontendStore = () => {
  const [, forceUpdate] = useState({});

  // Force re-render when store changes
  const triggerUpdate = useCallback(() => {
    forceUpdate({});
  }, []);

  // Check if global store is available (running inside host)
  const isGlobalStoreAvailable =
    typeof window !== 'undefined' && 'globalMicroFrontendStore' in window;

  // Subscribe to store changes (either global or local)
  useEffect(() => {
    if (isGlobalStoreAvailable) {
      const globalStore = window.globalMicroFrontendStore!;
      return globalStore.subscribe(triggerUpdate);
    } else {
      return localStore.subscribe(triggerUpdate);
    }
  }, [triggerUpdate, isGlobalStoreAvailable]);

  if (isGlobalStoreAvailable) {
    // Access the shared global store directly
    const globalStore = window.globalMicroFrontendStore!;
    const state = globalStore.getState();

    // Return global store state and actions
    return {
      ...state,
      // Use global store's navigation methods
      navigateTo: globalStore.getState().navigateTo,
      setCurrentPage: globalStore.getState().setCurrentPage,
      setUser: globalStore.getState().setUser,
      setTheme: globalStore.getState().setTheme,
      setSharedData: globalStore.getState().setSharedData,
      getSharedData: globalStore.getState().getSharedData,
      setLoading: globalStore.getState().setLoading,
    };
  }

  // Use local store for standalone mode
  const state = localStore.getState();

  const actions = {
    setCurrentPage: (page: string) => {
      localStore.setState({ currentPage: page });
    },

    navigateTo: (page: string) => {
      localStore.setState({ currentPage: page });

      // Emit navigation event
      if (typeof window !== 'undefined' && window.microFrontendEventBus) {
        window.microFrontendEventBus.emit({
          type: 'NAVIGATION_CHANGE',
          payload: { page },
        });
      }
    },

    setUser: (userData: Partial<MicroFrontendState['user']>) => {
      const currentState = localStore.getState();
      localStore.setState({
        user: { ...currentState.user, ...userData },
      });
    },

    setTheme: (theme: MicroFrontendState['theme']) => {
      localStore.setState({ theme });
    },

    setSharedData: (key: string, value: unknown) => {
      const currentState = localStore.getState();
      localStore.setState({
        sharedData: { ...currentState.sharedData, [key]: value },
      });
    },

    getSharedData: (key: string) => {
      return localStore.getState().sharedData[key];
    },

    setLoading: (isLoading: boolean) => {
      localStore.setState({ isLoading });
    },
  };

  return { ...state, ...actions };
};

// Navigation hook
export const useNavigation = () => {
  const store = useMicroFrontendStore();

  return {
    currentPage: store.currentPage,
    navigateTo: store.navigateTo,
    isCurrentPage: (page: string) => store.currentPage === page,
  };
};

// Theme hook
export const useTheme = () => {
  const store = useMicroFrontendStore();

  return {
    theme: store.theme,
    setTheme: store.setTheme,
    isDark: store.theme === 'dark',
    isLight: store.theme === 'light',
  };
};

export default useMicroFrontendStore;
