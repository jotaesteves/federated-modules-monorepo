type CountStore = {
  count: number;
  increment: () => void;
  decrement: () => void;
};
export declare const useCountStore: import('zustand').UseBoundStore<
  Omit<import('zustand').StoreApi<CountStore>, 'setState' | 'persist'> & {
    setState(
      partial:
        | CountStore
        | Partial<CountStore>
        | ((state: CountStore) => CountStore | Partial<CountStore>),
      replace?: false | undefined
    ): unknown;
    setState(state: CountStore | ((state: CountStore) => CountStore), replace: true): unknown;
    persist: {
      setOptions: (
        options: Partial<
          import('zustand/middleware').PersistOptions<CountStore, CountStore, unknown>
        >
      ) => void;
      clearStorage: () => void;
      rehydrate: () => Promise<void> | void;
      hasHydrated: () => boolean;
      onHydrate: (fn: (state: CountStore) => void) => () => void;
      onFinishHydration: (fn: (state: CountStore) => void) => () => void;
      getOptions: () => Partial<
        import('zustand/middleware').PersistOptions<CountStore, CountStore, unknown>
      >;
    };
  }
>;
export {};
//# sourceMappingURL=count.d.ts.map
