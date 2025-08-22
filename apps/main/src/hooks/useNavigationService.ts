import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

// Types - these match the shared types but are declared locally for TypeScript
type NavigationPath =
  | 'vision360'
  | 'personalData'
  | 'assetsProducts'
  | 'channelsAndServices'
  | 'historyInteractions'
  | 'records';

interface NavigationEvent {
  path: NavigationPath;
  params?: Record<string, string>;
  state?: unknown;
}

// Try to import shared navigation utilities at runtime
let sharedGetRouterPath: ((path: NavigationPath) => string) | null = null;
let sharedGetNavigationPath: ((path: string) => NavigationPath | null) | null = null;

try {
  // @ts-ignore - Module federation imports
  const sharedConfig = require('shared/config/navigationConfig');
  sharedGetRouterPath = sharedConfig.getRouterPath;
  sharedGetNavigationPath = sharedConfig.getNavigationPath;
} catch {
  // Silently fall back to local implementations
}

// Fallback navigation configuration
const FALLBACK_NAVIGATION_ROUTES: Record<NavigationPath, { routerPath: string; label: string }> = {
  vision360: { routerPath: '/vision-360', label: 'Visao 360' },
  personalData: { routerPath: '/personal-data', label: 'Dados Pessoais' },
  assetsProducts: { routerPath: '/assets-products', label: 'Patrimonio e Productos' },
  channelsAndServices: { routerPath: '/channels-and-services', label: 'Canais e Serviços' },
  historyInteractions: { routerPath: '/history-interactions', label: 'Historico Interacões' },
  records: { routerPath: '/records', label: 'Records' },
};

function fallbackGetRouterPath(navigationPath: NavigationPath): string {
  return FALLBACK_NAVIGATION_ROUTES[navigationPath]?.routerPath || '/';
}

function fallbackGetNavigationPath(routerPath: string): NavigationPath | null {
  const pathSegment = routerPath.split('/')[1];

  for (const [navPath, config] of Object.entries(FALLBACK_NAVIGATION_ROUTES)) {
    const routeSegment = config.routerPath.replace('/', '');
    if (routeSegment === pathSegment) {
      return navPath as NavigationPath;
    }
  }

  return null;
}

// Navigation utilities for the host application
const HostNavigation = {
  getRouterPath: sharedGetRouterPath || fallbackGetRouterPath,
  getNavigationPath: sharedGetNavigationPath || fallbackGetNavigationPath,

  onNavigationRequest(callback: (event: NavigationEvent) => void): () => void {
    const handler = (event: Event) => {
      const customEvent = event as CustomEvent<NavigationEvent>;
      callback(customEvent.detail);
    };

    window.addEventListener('mf-navigate', handler);

    return () => {
      window.removeEventListener('mf-navigate', handler);
    };
  },

  notifyLocationChange(path: NavigationPath | null): void {
    window.dispatchEvent(
      new CustomEvent('mf-location-changed', {
        detail: { path },
      })
    );
  },
};

/**
 * Hook for integrating navigation with React Router in the host application
 * This should only be used in the main (host) application
 */
export const useNavigationService = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Subscribe to navigation events from remote modules
    const unsubscribe = HostNavigation.onNavigationRequest((event: NavigationEvent) => {
      const routerPath = HostNavigation.getRouterPath(event.path);
      void navigate(routerPath);
    });

    return unsubscribe;
  }, [navigate]);

  useEffect(() => {
    // Notify remotes about location changes
    const currentPath = HostNavigation.getNavigationPath(location.pathname);
    HostNavigation.notifyLocationChange(currentPath);
  }, [location]);

  return {
    currentPath: HostNavigation.getNavigationPath(location.pathname),
  };
};

export default useNavigationService;
