import type React from 'react';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router';

const tabs = [
  { value: 'vision360', label: 'Visao 360', path: '/vision-360' },
  { value: 'personalData', label: 'Dados Pessoais', path: '/personal-data' },
  {
    value: 'assetsProducts',
    label: 'Patrimonio e Productos',
    path: '/assets-products'
  },
  {
    value: 'channelsAndServices',
    label: 'Canais e Serviços',
    path: '/channels-and-services'
  },
  {
    value: 'historyInteractions',
    label: 'Historico Interacões',
    path: '/history-interactions'
  }
];

const HeaderTabs: React.FC = () => {
  // Track location early so initial state can reflect the current route
  const location = useLocation();

  // Access the global store from the host app with a minimal inferred type
  type GlobalStore = {
    getState: () => { currentPage: string; navigateTo?: (page: string) => void } & Record<
      string,
      unknown
    >;
    subscribe?: <T>(
      selector: (state: ReturnType<GlobalStore['getState']>) => T,
      listener: (value: T) => void
    ) => () => void;
  };
  type WindowWithStore = Window & { globalMicroFrontendStore?: GlobalStore };
  const globalStore = (window as WindowWithStore)?.globalMicroFrontendStore;

  // Compute initial active tab from global store or current URL
  const getInitialActiveTab = (): string | null => {
    const store = (window as WindowWithStore)?.globalMicroFrontendStore;
    const storePage = store?.getState()?.currentPage;
    if (storePage && tabs.some((t) => t.value === storePage)) return storePage;
    const byPath = tabs.find((t) => t.path && location.pathname.startsWith(t.path));
    return byPath?.value ?? null; // no default selection if no match
  };

  const [activeTab, setActiveTab] = useState<string | null>(getInitialActiveTab());

  // Sync with global store if available
  useEffect(() => {
    let cleanup: (() => void) | undefined;
    if (globalStore) {
      const currentPage = globalStore.getState().currentPage;
      if (tabs.some((tab) => tab.value === currentPage)) {
        setActiveTab(currentPage);
      } else {
        setActiveTab(null);
      }

      cleanup = globalStore.subscribe?.(
        (state) => state.currentPage,
        (currentPage: string) => {
          if (tabs.some((tab) => tab.value === currentPage)) {
            setActiveTab(currentPage);
          } else {
            setActiveTab(null);
          }
        }
      );
    }
    return cleanup;
  }, [globalStore]);

  // Fallback: derive active tab from URL when running inside host without global store
  useEffect(() => {
    if (!globalStore) {
      const byPath = tabs.find((t) => t.path && location.pathname.startsWith(t.path));
      if (byPath && byPath.value !== activeTab) {
        setActiveTab(byPath.value);
      } else if (!byPath && activeTab !== null) {
        setActiveTab(null);
      }
    }
  }, [location.pathname, globalStore, activeTab]);

  const handleTabClick = (tabValue: string) => {
    setActiveTab(tabValue);

    // Update the global store in the host app
    if (globalStore) {
      globalStore.getState().navigateTo?.(tabValue);
    }
  };

  return (
    <nav className="flex items-center bg-white border-b border-gray-200 pl-[106px] h-[72px]">
      <ul className="flex space-x-8">
        {tabs.map((tab) => (
          <li key={tab.value}>
            {tab.path ? (
              <Link
                className={`py-4 px-2 text-xl font-semibold transition-colors duration-200 border-b-4 ${
                  activeTab === tab.value
                    ? 'text-primary border-primary-500'
                    : 'text-neutral-900 border-transparent hover:text-pink-500 hover:border-pink-300'
                }`}
                data-tab={tab.value}
                to={tab.path}
                onClick={() => handleTabClick(tab.value)}
              >
                {tab.label}
              </Link>
            ) : (
              <button
                className={`py-4 px-2 text-sm font-medium transition-colors duration-200 border-b-4 ${
                  activeTab === tab.value
                    ? 'text-primary border-primary'
                    : 'text-neutral-900 border-transparent hover:text-pink-500 hover:border-pink-300'
                }`}
                data-tab={tab.value}
                onClick={() => handleTabClick(tab.value)}
                type="button"
              >
                {tab.label}
              </button>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default HeaderTabs;
