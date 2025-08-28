export interface GlobalState {
  currentPage: string;
  navigationHistory: string[];
  user: {
    name?: string;
    email?: string;
    isAuthenticated: boolean;
  };
  theme: 'light' | 'dark';
  language: 'en' | 'es' | 'fr';
  sharedData: Record<string, unknown>;
  isLoading: boolean;
  loadingMessage?: string;
}
export interface GlobalActions {
  setCurrentPage: (page: string) => void;
  navigateTo: (page: string) => void;
  goBack: () => void;
  removeFromHistory: (page: string) => void;
  setUser: (user: Partial<GlobalState['user']>) => void;
  login: (name: string, email: string) => void;
  logout: () => void;
  setTheme: (theme: GlobalState['theme']) => void;
  setLanguage: (language: GlobalState['language']) => void;
  setSharedData: (key: string, value: unknown) => void;
  getSharedData: (key: string) => unknown;
  clearSharedData: (key?: string) => void;
  setLoading: (isLoading: boolean, message?: string) => void;
  reset: () => void;
}
export declare const useGlobalStore: import('zustand').UseBoundStore<
  Omit<import('zustand').StoreApi<GlobalState & GlobalActions>, 'subscribe'> & {
    subscribe: {
      (
        listener: (
          selectedState: GlobalState & GlobalActions,
          previousSelectedState: GlobalState & GlobalActions
        ) => void
      ): () => void;
      <U>(
        selector: (state: GlobalState & GlobalActions) => U,
        listener: (selectedState: U, previousSelectedState: U) => void,
        options?:
          | {
              equalityFn?: ((a: U, b: U) => boolean) | undefined;
              fireImmediately?: boolean;
            }
          | undefined
      ): () => void;
    };
  }
>;
declare global {
  interface Window {
    globalMicroFrontendStore: typeof useGlobalStore;
    microFrontendNavigation?: {
      navigateTo: (path: string) => void;
      getRouteFromTab?: (tab: string) => string;
      getTabFromRoute?: (route: string) => string;
    };
  }
}
export default useGlobalStore;
//# sourceMappingURL=globalStore.d.ts.map
