import * as React from 'react';
import { Outlet } from 'react-router-dom';
import FallbackSpinner from '../components/FallbackSpinner/FallbackSpinner';

// Lazy load with error handling
const Header = React.lazy(() =>
  import('header/Header').catch(() => {
    console.warn('Failed to load Header component');
    return {
      default: () => (
        <div className="h-16 bg-white border-b flex items-center justify-center">
          Header unavailable
        </div>
      ),
    };
  })
);

const Footer = React.lazy(() =>
  import('footer/Footer').catch(() => {
    console.warn('Failed to load Footer component');
    return {
      default: () => (
        <div className="h-16 bg-white border-t flex items-center justify-center">
          Footer unavailable
        </div>
      ),
    };
  })
);

const Sidebar = React.lazy(() =>
  import('header/Sidebar').catch(() => {
    console.warn('Failed to load Sidebar component');
    return {
      default: () => (
        <div className="w-[106px] bg-white border-r flex items-center justify-center">
          Sidebar unavailable
        </div>
      ),
    };
  })
);

interface DashboardLayoutProps {
  children?: React.ReactNode;
}

export const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  return (
    <div className="flex min-h-screen flex-col bg-slate-50 text-slate-900">
      {/* Header - Fixed at top */}
      <React.Suspense fallback={<FallbackSpinner />}>
        <Header />
      </React.Suspense>

      {/* Main content area - Takes remaining height between header and footer */}
      <div className="flex flex-1 min-h-0">
        {/* Sidebar - Fixed width, full height between header and footer, no scroll */}
        <React.Suspense fallback={<FallbackSpinner />}>
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
      <React.Suspense fallback={<FallbackSpinner />}>
        <Footer />
      </React.Suspense>
    </div>
  );
};

export default DashboardLayout;
