import * as React from 'react';
import { Outlet } from 'react-router';
import Spinner from 'shared/components/Spinner';

const Header = React.lazy(() => import('header/Header'));
const Footer = React.lazy(() => import('footer/Footer'));

interface BaseLayoutProps {
  children?: React.ReactNode;
}

export const BaseLayout: React.FC<BaseLayoutProps> = ({ children }) => {
  return (
    <div className="flex min-h-screen flex-col bg-slate-50 text-slate-900">
      <React.Suspense
        fallback={
          <div className="h-16 bg-white border-b flex items-center justify-center">
            <Spinner />
          </div>
        }
      >
        <Header />
      </React.Suspense>
      <div className="flex-1 min-h-0">
        <main className="mx-auto h-full p-4">{children || <Outlet />}</main>
      </div>
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

export default BaseLayout;
