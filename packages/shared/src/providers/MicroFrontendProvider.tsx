import type React from 'react';
import { useEffect } from 'react';
import type { MicroFrontendEvent } from '../shared/eventBus';
import eventBus from '../shared/eventBus';
import { useGlobalStore } from '../stores/globalStore';

interface MicroFrontendProviderProps {
  children: React.ReactNode;
}

export const MicroFrontendProvider: React.FC<MicroFrontendProviderProps> = ({ children }) => {
  const { setCurrentPage, currentPage } = useGlobalStore();

  useEffect(() => {
    // Listen for navigation events from micro-frontends (backward compatibility)
    const handleNavigationEvent = (event: MicroFrontendEvent) => {
      if (
        event.type === 'NAVIGATION_CHANGE' &&
        event.payload &&
        typeof event.payload === 'object' &&
        'page' in event.payload
      ) {
        setCurrentPage((event.payload as { page: string }).page);
      }
    };

    eventBus.on('NAVIGATION_CHANGE', handleNavigationEvent);

    // Cleanup event listener on unmount
    return () => {
      eventBus.off('NAVIGATION_CHANGE', handleNavigationEvent);
    };
  }, [setCurrentPage]);

  // Log current page changes for debugging
  useEffect(() => {
    console.log(`[MicroFrontend] Current page changed to: ${currentPage}`);
  }, [currentPage]);

  return <>{children}</>;
};

export default MicroFrontendProvider;
