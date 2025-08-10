import * as React from 'react';
import { Outlet } from 'react-router-dom';
import Spinner from 'shared/components/Spinner';

const Header = React.lazy(() => import('header/Header'));
const Footer = React.lazy(() => import('footer/Footer'));
const Sidebar = React.lazy(() => import('header/Sidebar'));

interface DashboardLayoutProps {
  children?: React.ReactNode;
}

export const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  return (
    <div className="flex min-h-screen flex-col bg-slate-50 text-slate-900">
      {/* Header - Fixed at top */}
      <React.Suspense
        fallback={
          <div className="h-16 bg-white border-b flex items-center justify-center">
            <Spinner />
          </div>
        }
      >
        <Header />
      </React.Suspense>

      {/* Main content area - Takes remaining height between header and footer */}
      <div className="flex flex-1 min-h-0">
        {/* Sidebar - Fixed width, full height between header and footer, no scroll */}
        <React.Suspense
          fallback={
            <div className="w-64 bg-white border-r flex items-center justify-center">
              <Spinner />
            </div>
          }
        >
          <div className="flex-shrink-0">
            <Sidebar />
          </div>
        </React.Suspense>

        {/* Main content - Scrollable area */}
        <div className="flex-1 min-h-0 overflow-auto">{children || <Outlet />}</div>
      </div>

      {/* Footer - Fixed at bottom */}
      <React.Suspense
        fallback={
          <div className="h-16 bg-white border-t flex items-center justify-center">
            <Spinner />
          </div>
        }
      >
        <Footer />
      </React.Suspense>
    </div>
  );
};

export default DashboardLayout;
