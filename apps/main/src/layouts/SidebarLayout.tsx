import * as React from 'react';
import { Outlet } from 'react-router';
import { Spinner } from '../components';
import { SidebarProvider } from 'shared/components/ui';

import Page from '../pages/Definicoes/Definicoes';

interface SidebarLayoutProps {
  children?: React.ReactNode;
}

export const SidebarLayout: React.FC<SidebarLayoutProps> = ({ children }) => {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen">
        <React.Suspense
          fallback={
            <div className="w-64 bg-white border-r flex items-center justify-center">
              <Spinner />
            </div>
          }
        >
          <Page />
        </React.Suspense>
        <div className="flex-1 min-h-0">
          <main className="h-full p-4">{children || <Outlet />}</main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default SidebarLayout;
