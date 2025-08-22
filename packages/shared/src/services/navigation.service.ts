/**
 * Navigation Service for Module Federation
 *
 * This service provides a communication bridge between the host application (Main)
 * and remote applications (Header, etc.) for navigation management.
 *
 * The host application owns the React Router, and remotes communicate navigation
 * intent through this service.
 */

import { type NavigationPath, getRouterPath, getNavigationPath } from '../config/navigation.config';

export interface NavigationEvent {
  path: NavigationPath;
  params?: Record<string, string>;
  state?: unknown;
}

export type NavigationListener = (event: NavigationEvent) => void;
export type LocationChangeListener = (location: {
  pathname: string;
  search: string;
  hash: string;
}) => void;

class NavigationService {
  private navigationListeners: NavigationListener[] = [];
  private locationChangeListeners: LocationChangeListener[] = [];
  private currentLocation: { pathname: string; search: string; hash: string } = {
    pathname: '/',
    search: '',
    hash: '',
  };

  /**
   * Subscribe to navigation events from remotes
   * This is typically used by the host application
   */
  onNavigate(listener: NavigationListener): () => void {
    this.navigationListeners.push(listener);

    // Return unsubscribe function
    return () => {
      const index = this.navigationListeners.indexOf(listener);
      if (index > -1) {
        this.navigationListeners.splice(index, 1);
      }
    };
  }

  /**
   * Navigate to a specific path
   * This is typically called by remote applications
   */
  navigate(path: NavigationPath, params?: Record<string, string>, state?: unknown): void {
    const event: NavigationEvent = { path, params, state };
    this.navigationListeners.forEach((listener) => listener(event));
  }

  /**
   * Subscribe to location changes from the host
   * This is typically used by remote applications to sync their state
   */
  onLocationChange(listener: LocationChangeListener): () => void {
    this.locationChangeListeners.push(listener);

    // Return unsubscribe function
    return () => {
      const index = this.locationChangeListeners.indexOf(listener);
      if (index > -1) {
        this.locationChangeListeners.splice(index, 1);
      }
    };
  }

  /**
   * Update current location
   * This is typically called by the host application when location changes
   */
  updateLocation(location: { pathname: string; search: string; hash: string }): void {
    this.currentLocation = location;
    this.locationChangeListeners.forEach((listener) => listener(location));
  }

  /**
   * Get current location
   */
  getCurrentLocation(): { pathname: string; search: string; hash: string } {
    return this.currentLocation;
  }

  /**
   * Get current active path based on pathname
   */
  getCurrentPath(): NavigationPath | null {
    const pathname = this.currentLocation.pathname;
    return getNavigationPath(pathname);
  }

  /**
   * Convert navigation path to router path
   */
  getRouterPath(navigationPath: NavigationPath): string {
    return getRouterPath(navigationPath);
  }
}

// Create singleton instance
export const navigationService = new NavigationService();

// Export types for TypeScript support
export default navigationService;
