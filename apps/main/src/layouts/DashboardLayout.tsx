import * as React from 'react';
import { Outlet } from 'react-router';
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
      <React.Suspense fallback={<Spinner />}>
        <Header />
      </React.Suspense>

      {/* Main content area - Takes remaining height between header and footer */}
      <div className="flex flex-1 min-h-0">
        {/* Sidebar - Fixed width, full height between header and footer, no scroll */}
        <React.Suspense fallback={<Spinner />}>
          <div className="flex-shrink-0">
            <Sidebar />
          </div>
        </React.Suspense>

        {/* Main content - Scrollable area */}
        <div className="flex-1 min-h-0 overflow-auto ml-[106px] w-[calc(100%_-_106px)]">
          {children || <Outlet />}
        </div>
      </div>

      {/* Footer - Fixed at bottom */}
      <React.Suspense fallback={<Spinner />}>
        <Footer />
      </React.Suspense>
    </div>
  );
};

export default DashboardLayout;
