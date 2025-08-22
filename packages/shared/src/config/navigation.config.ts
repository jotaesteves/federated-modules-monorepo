/**
 * Central Navigation Configuration
 *
 * This file contains the single source of truth for all navigation mappings
 * in the Module Federation application. It eliminates duplication and ensures
 * consistency across all navigation-related functionality.
 */

export type NavigationPath =
  | 'vision360'
  | 'personalData'
  | 'assetsProducts'
  | 'channelsAndServices'
  | 'historyInteractions'
  | 'records';

export interface NavigationRoute {
  navigationPath: NavigationPath;
  routerPath: string;
  label: string;
}

/**
 * Master navigation configuration
 * This is the single source of truth for all navigation mappings
 */
export const NAVIGATION_ROUTES: Record<NavigationPath, NavigationRoute> = {
  vision360: {
    navigationPath: 'vision360',
    routerPath: '/vision-360',
    label: 'Visao 360',
  },
  personalData: {
    navigationPath: 'personalData',
    routerPath: '/personal-data',
    label: 'Dados Pessoais',
  },
  assetsProducts: {
    navigationPath: 'assetsProducts',
    routerPath: '/assets-products',
    label: 'Patrimonio e Productos',
  },
  channelsAndServices: {
    navigationPath: 'channelsAndServices',
    routerPath: '/channels-and-services',
    label: 'Canais e Serviços',
  },
  historyInteractions: {
    navigationPath: 'historyInteractions',
    routerPath: '/history-interactions',
    label: 'Historico Interacões',
  },
  records: {
    navigationPath: 'records',
    routerPath: '/records',
    label: 'Records',
  },
};

/**
 * Get router path from navigation path
 */
export function getRouterPath(navigationPath: NavigationPath): string {
  return NAVIGATION_ROUTES[navigationPath]?.routerPath || '/';
}

/**
 * Get navigation path from router path
 */
export function getNavigationPath(routerPath: string): NavigationPath | null {
  const pathSegment = routerPath.split('/')[1];

  for (const route of Object.values(NAVIGATION_ROUTES)) {
    // Remove leading slash and compare
    const routeSegment = route.routerPath.replace('/', '');
    if (routeSegment === pathSegment) {
      return route.navigationPath;
    }
  }

  return null;
}

/**
 * Get all navigation routes as an array
 */
export function getAllRoutes(): NavigationRoute[] {
  return Object.values(NAVIGATION_ROUTES);
}

/**
 * Get routes that should appear in navigation tabs
 * (excludes some routes like 'records' that might not be in main navigation)
 */
export function getTabRoutes(): NavigationRoute[] {
  const tabRoutes: NavigationPath[] = [
    'vision360',
    'personalData',
    'assetsProducts',
    'channelsAndServices',
    'historyInteractions',
  ];

  return tabRoutes.map((path) => NAVIGATION_ROUTES[path]);
}

/**
 * Get route configuration by navigation path
 */
export function getRoute(navigationPath: NavigationPath): NavigationRoute | null {
  return NAVIGATION_ROUTES[navigationPath] || null;
}

/**
 * Check if a navigation path is valid
 */
export function isValidNavigationPath(path: string): path is NavigationPath {
  return path in NAVIGATION_ROUTES;
}
