import * as React from 'react';
import { Outlet } from 'react-router-dom';
import FallbackSpinner from '../components/FallbackSpinner/FallbackSpinner';

import Page from '../pages/Definicoes/Definicoes';

// Lazy load SidebarProvider with error handling
const LazySidebarProvider = React.lazy(() =>
  import('shared/components/ui')
    .then((module) => ({ default: module.SidebarProvider }))
    .catch(() => {
      console.warn('Failed to load SidebarProvider from shared module, using fallback');
      return {
        default: ({ children }: { children: React.ReactNode }) => <>{children}</>,
      };
    })
);

interface SidebarLayoutProps {
  children?: React.ReactNode;
}

export const SidebarLayout: React.FC<SidebarLayoutProps> = ({ children }) => {
  return (
    <React.Suspense fallback={<div>Loading sidebar provider...</div>}>
      <LazySidebarProvider>
        <div className="flex min-h-screen">
          <React.Suspense
            fallback={
              <div className="w-64 bg-white border-r flex items-center justify-center">
                <FallbackSpinner />
              </div>
            }
          >
            <Page />
          </React.Suspense>
          <div className="flex-1 min-h-0">
            <main className="h-full p-4">{children || <Outlet />}</main>
          </div>
        </div>
      </LazySidebarProvider>
    </React.Suspense>
  );
};

export default SidebarLayout;
