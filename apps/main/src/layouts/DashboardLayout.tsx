import * as React from 'react';
import { Outlet } from 'react-router-dom';
import Spinner from '../components/common/Spinner';

const Header = React.lazy(() => import('header/Header'));
const Footer = React.lazy(() => import('footer/Footer'));
const Sidebar = React.lazy(() => import('header/Sidebar'));

interface DashboardLayoutProps {
  children?: React.ReactNode;
}

export const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
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
        <div className="mx-auto h-full">
          <main style={{ height: '75vh' }} className="flex overflow-scroll min-h-0">
            <React.Suspense
              fallback={
                <div className="w-64 bg-white border-r flex items-center justify-center">
                  <Spinner />
                </div>
              }
            >
              <Sidebar />
            </React.Suspense>
            <div className="flex-1 min-h-0">{children || <Outlet />}</div>
          </main>
        </div>
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

export default DashboardLayout;
