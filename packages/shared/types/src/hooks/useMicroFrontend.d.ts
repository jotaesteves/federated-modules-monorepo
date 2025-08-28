export declare const useMicroFrontendStore: () => import('../stores/globalStore').GlobalState &
  import('../stores/globalStore').GlobalActions;
export declare const useMicroFrontendNavigation: () => {
  currentPage: string;
  navigate: (page: string) => void;
  back: () => void;
  isCurrentPage: (page: string) => boolean;
  navigationHistory: string[];
};
export declare const useMicroFrontendUser: () => {
  user: {
    name?: string;
    email?: string;
    isAuthenticated: boolean;
  };
  setUser: (user: Partial<import('../stores/globalStore').GlobalState['user']>) => void;
  login: (name: string, email: string) => void;
  logout: () => void;
  isAuthenticated: boolean;
};
export declare const useMicroFrontendTheme: () => {
  theme: 'dark' | 'light';
  setTheme: (theme: import('../stores/globalStore').GlobalState['theme']) => void;
  toggleTheme: () => void;
  isDark: boolean;
  isLight: boolean;
};
export declare const useMicroFrontendSharedData: () => {
  sharedData: Record<string, unknown>;
  setData: (key: string, value: any) => void;
  getData: (key: string) => unknown;
  clearData: (key?: string) => void;
};
export declare const useMicroFrontendLoading: () => {
  isLoading: boolean;
  loadingMessage: string | undefined;
  startLoading: (message?: string) => void;
  stopLoading: () => void;
  setLoading: (isLoading: boolean, message?: string) => void;
};
export declare const useMicroFrontendSync: () => {
  isConnected: boolean;
  isStandalone: boolean;
};
export declare const useMicroFrontendCommunication: () => {
  sendMessage: (targetMF: string, message: any) => void;
  getMessages: (targetMF: string) => never[];
};
declare const _default: {
  useMicroFrontendStore: () => import('../stores/globalStore').GlobalState &
    import('../stores/globalStore').GlobalActions;
  useMicroFrontendNavigation: () => {
    currentPage: string;
    navigate: (page: string) => void;
    back: () => void;
    isCurrentPage: (page: string) => boolean;
    navigationHistory: string[];
  };
  useMicroFrontendUser: () => {
    user: {
      name?: string;
      email?: string;
      isAuthenticated: boolean;
    };
    setUser: (user: Partial<import('../stores/globalStore').GlobalState['user']>) => void;
    login: (name: string, email: string) => void;
    logout: () => void;
    isAuthenticated: boolean;
  };
  useMicroFrontendTheme: () => {
    theme: 'dark' | 'light';
    setTheme: (theme: import('../stores/globalStore').GlobalState['theme']) => void;
    toggleTheme: () => void;
    isDark: boolean;
    isLight: boolean;
  };
  useMicroFrontendSharedData: () => {
    sharedData: Record<string, unknown>;
    setData: (key: string, value: any) => void;
    getData: (key: string) => unknown;
    clearData: (key?: string) => void;
  };
  useMicroFrontendLoading: () => {
    isLoading: boolean;
    loadingMessage: string | undefined;
    startLoading: (message?: string) => void;
    stopLoading: () => void;
    setLoading: (isLoading: boolean, message?: string) => void;
  };
  useMicroFrontendSync: () => {
    isConnected: boolean;
    isStandalone: boolean;
  };
  useMicroFrontendCommunication: () => {
    sendMessage: (targetMF: string, message: any) => void;
    getMessages: (targetMF: string) => never[];
  };
};
export default _default;
//# sourceMappingURL=useMicroFrontend.d.ts.map
