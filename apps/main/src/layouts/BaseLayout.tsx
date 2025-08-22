import * as React from 'react';
import { Outlet } from 'react-router-dom';
import FallbackSpinner from '../components/FallbackSpinner/FallbackSpinner';
import ModuleFederationErrorBoundary from '../components/ModuleFederationErrorBoundary';

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

interface BaseLayoutProps {
  children?: React.ReactNode;
}

export const BaseLayout: React.FC<BaseLayoutProps> = ({ children }) => {
  return (
    <div className="flex min-h-screen flex-col bg-slate-50 text-slate-900">
      <ModuleFederationErrorBoundary
        moduleName="Header"
        fallback={
          <div className="h-16 bg-white border-b flex items-center justify-center">
            <FallbackSpinner />
          </div>
        }
      >
        <React.Suspense
          fallback={
            <div className="h-16 bg-white border-b flex items-center justify-center">
              <FallbackSpinner />
            </div>
          }
        >
          <Header />
        </React.Suspense>
      </ModuleFederationErrorBoundary>
      <div className="flex-1 min-h-0">
        <main className="mx-auto h-full p-4">{children || <Outlet />}</main>
      </div>
      <ModuleFederationErrorBoundary
        moduleName="Footer"
        fallback={
          <div className="h-16 bg-white border-t flex items-center justify-center">
            <FallbackSpinner />
          </div>
        }
      >
        <React.Suspense
          fallback={
            <div className="h-16 bg-white border-t flex items-center justify-center">
              <FallbackSpinner />
            </div>
          }
        >
          <Footer />
        </React.Suspense>
      </ModuleFederationErrorBoundary>
    </div>
  );
};

export default BaseLayout;
