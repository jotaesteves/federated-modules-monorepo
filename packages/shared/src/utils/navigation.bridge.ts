/**
 * Simple Navigation Bridge for Module Federation
 *
 * This approach uses custom events to communicate between host and remote apps
 * without relying on complex module federation imports for services.
 */

import { type NavigationPath, getRouterPath, getNavigationPath } from '../config/navigation.config';
import type { NavigationEvent } from '../services/navigation.service';

/**
 * Navigation utilities for the host application
 */
export const HostNavigation = {
  /**
   * Convert navigation path to router path
   */
  getRouterPath,

  /**
   * Get navigation path from router path
   */
  getNavigationPath,

  /**
   * Listen for navigation requests from remotes
   */
  onNavigationRequest(callback: (event: NavigationEvent) => void): () => void {
    const handler = (event: CustomEvent<NavigationEvent>) => {
      callback(event.detail);
    };

    window.addEventListener('mf-navigate', handler as EventListener);

    return () => {
      window.removeEventListener('mf-navigate', handler as EventListener);
    };
  },

  /**
   * Notify remotes about location changes
   */
  notifyLocationChange(
    path: NavigationPath | null,
    location: { pathname: string; search: string; hash: string }
  ): void {
    window.dispatchEvent(
      new CustomEvent('mf-location-changed', {
        detail: { path, location },
      })
    );
  },
};

/**
 * Navigation utilities for remote applications
 */
export const RemoteNavigation = {
  /**
   * Request navigation to a specific path
   */
  navigate(path: NavigationPath, params?: Record<string, string>): void {
    window.dispatchEvent(
      new CustomEvent('mf-navigate', {
        detail: { path, params },
      })
    );
  },

  /**
   * Listen for location changes from the host
   */
  onLocationChange(
    callback: (
      path: NavigationPath | null,
      location: { pathname: string; search: string; hash: string }
    ) => void
  ): () => void {
    const handler = (event: CustomEvent) => {
      const { path, location } = event.detail;
      callback(path, location);
    };

    window.addEventListener('mf-location-changed', handler as EventListener);

    return () => {
      window.removeEventListener('mf-location-changed', handler as EventListener);
    };
  },

  /**
   * Get current navigation path from window location
   */
  getCurrentPath(): NavigationPath | null {
    return HostNavigation.getNavigationPath(window.location.pathname);
  },
};
