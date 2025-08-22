import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Types (these are always available as they're compile-time)
type NavigationPath =
  | 'vision360'
  | 'personalData'
  | 'assetsProducts'
  | 'channelsAndServices'
  | 'historyInteractions'
  | 'records';

interface NavigationRoute {
  navigationPath: NavigationPath;
  routerPath: string;
  label: string;
}

// Try to import shared services at runtime
let navigationService: any = null; // eslint-disable-line @typescript-eslint/no-explicit-any
let getTabRoutes: (() => NavigationRoute[]) | null = null;

try {
  // @ts-ignore - Module federation imports
  const sharedService = require('shared/services/navigationService');
  const sharedConfig = require('shared/config/navigationConfig');

  navigationService = sharedService.default;
  getTabRoutes = sharedConfig.getTabRoutes;
} catch {
  // Silently fall back to local implementations
}

// Fallback configuration for tabs (only used if module federation imports fail)
const fallbackTabs: NavigationRoute[] = [
  { navigationPath: 'vision360', routerPath: '/vision-360', label: 'Visao 360' },
  { navigationPath: 'personalData', routerPath: '/personal-data', label: 'Dados Pessoais' },
  {
    navigationPath: 'assetsProducts',
    routerPath: '/assets-products',
    label: 'Patrimonio e Productos',
  },
  {
    navigationPath: 'channelsAndServices',
    routerPath: '/channels-and-services',
    label: 'Canais e Serviços',
  },
  {
    navigationPath: 'historyInteractions',
    routerPath: '/history-interactions',
    label: 'Historico Interacões',
  },
];

// Get tabs from shared config or use fallback
const tabs: NavigationRoute[] = getTabRoutes ? getTabRoutes() : fallbackTabs;

// Navigation utilities using the shared navigationService
const NavigationHelper = {
  getRouterPath(navigationPath: NavigationPath): string {
    if (navigationService) {
      return navigationService.getRouterPath(navigationPath);
    }
    // Fallback: simple lookup in tabs
    const route = tabs.find((tab) => tab.navigationPath === navigationPath);
    return route?.routerPath || '/';
  },

  getCurrentPath(): NavigationPath | null {
    if (navigationService) {
      return navigationService.getCurrentPath();
    }
    // Fallback: parse from URL
    const pathname = window.location.pathname;
    const pathSegment = pathname.split('/')[1];
    const route = tabs.find((tab) => tab.routerPath === `/${pathSegment}`);
    return route?.navigationPath || null;
  },

  navigate(path: NavigationPath): void {
    if (navigationService) {
      navigationService.navigate(path);
    } else {
      // Fallback: dispatch custom event
      window.dispatchEvent(new CustomEvent('mf-navigate', { detail: { path } }));
    }
  },

  onLocationChange(callback: (path: NavigationPath | null) => void): () => void {
    if (navigationService) {
      return navigationService.onLocationChange((location: any) => {
        const path = navigationService.getCurrentPath();
        callback(path);
      });
    } else {
      // Fallback: listen to custom events
      const handler = (event: Event) => {
        const customEvent = event as CustomEvent;
        const { path } = customEvent.detail;
        callback(path);
      };
      window.addEventListener('mf-location-changed', handler);
      return () => window.removeEventListener('mf-location-changed', handler);
    }
  },
};

const HeaderTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState<NavigationPath>(tabs[0].navigationPath);

  useEffect(() => {
    // Set initial active tab based on current location
    const currentPath = NavigationHelper.getCurrentPath();
    if (currentPath) {
      setActiveTab(currentPath);
    }

    // Subscribe to location changes from the host
    const unsubscribe = NavigationHelper.onLocationChange((path: NavigationPath | null) => {
      if (path) {
        setActiveTab(path);
      }
    });

    return unsubscribe;
  }, []);

  const handleTabClick = (tabValue: NavigationPath) => {
    setActiveTab(tabValue);
    // Request navigation from the host using navigationService
    NavigationHelper.navigate(tabValue);
  };

  return (
    <nav className="flex items-center bg-white border-b border-gray-200 pl-[106px] h-[72px]">
      <ul className="flex space-x-8">
        {tabs.map((tab) => (
          <li key={tab.navigationPath}>
            <Link
              to={NavigationHelper.getRouterPath(tab.navigationPath)}
              className={`py-4 px-2 text-xl font-semibold transition-colors duration-200 border-b-4 ${
                activeTab === tab.navigationPath
                  ? 'text-primary border-primary-500'
                  : 'text-neutral-900 border-transparent hover:text-pink-500 hover:border-pink-300'
              }`}
              data-tab={tab.navigationPath}
              onClick={() => handleTabClick(tab.navigationPath)}
            >
              {tab.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default HeaderTabs;
