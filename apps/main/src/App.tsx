import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useCountStore } from 'shared/stores/count';
// import NavBar from './components/NavBar/NavBar';
import Root from './pages/Root/Root';

/**
 * if safe import is needed (in case of remote bundle loading fails)
 * consider using FederatedBoundary https://github.com/module-federation/universe/tree/main/packages/utilities#react-utilities
 */

const Vision360 = React.lazy(() => import('vision360/Vision360'));
const App2 = React.lazy(() => import('app2/App2'));
const PersonalData = React.lazy(() => import('personalData/PersonalData'));
// Add CSS demo page (local)
const CSSDemo = React.lazy(() => import('./pages/CSSDemo'));
const Header = React.lazy(() => import('header/Header'));
const Footer = React.lazy(() => import('footer/Footer'));
const Sidebar = React.lazy(() => import('header/Sidebar'));

const Spinner = () => (
  <div className="flex items-center gap-2 text-slate-500">
    <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24">
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
        fill="none"
      />
      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
    </svg>
    Loading...
  </div>
);

const App: React.FC = () => {
  const { count } = useCountStore();
  return (
    <div className="flex min-h-screen flex-col bg-slate-50 text-slate-900">
      <Header />
      <div className="flex-1 min-h-0">
        <div className="mx-auto h-full">
          {/*   <div className="mt-10">
            <p className="mb-3 text-sm text-slate-600">
            Below is NavBar (host), tabs navigate to remote apps mounted via Module Federation.
            </p>
            <div className="rounded-lg border border-slate-200 bg-white p-3 shadow-sm">
            <NavBar />
            </div>
            </div> */}

          <main style={{ height: '75vh' }} className="flex overflow-scroll min-h-0">
            <Sidebar />
            <div className="flex-1 min-h-0">
              <Routes>
                {/* Use absolute paths to ensure matching */}
                <Route
                  path="/vision-360/*"
                  element={
                    <React.Suspense
                      fallback={
                        <div className="rounded-lg border border-slate-200 bg-white p-6 text-center shadow-sm">
                          <Spinner />
                        </div>
                      }
                    >
                      <div className="rounded-lg border border-slate-200 bg-gray-100 shadow-sm w-full">
                        <Vision360 />
                      </div>
                    </React.Suspense>
                  }
                />
                <Route
                  path="/personal-data/*"
                  element={
                    <React.Suspense
                      fallback={
                        <div className="rounded-lg border border-slate-200 bg-white p-6 text-center shadow-sm">
                          <Spinner />
                        </div>
                      }
                    >
                      <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
                        <PersonalData />
                      </div>
                    </React.Suspense>
                  }
                />
                <Route
                  path="/app-2/*"
                  element={
                    <React.Suspense
                      fallback={
                        <div className="rounded-lg border border-slate-200 bg-white p-6 text-center shadow-sm">
                          <Spinner />
                        </div>
                      }
                    >
                      <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
                        <App2 />
                      </div>
                    </React.Suspense>
                  }
                />
                {/* CSS demo page */}
                <Route
                  path="/css-demo"
                  element={
                    <React.Suspense
                      fallback={
                        <div className="rounded-lg border border-slate-200 bg-white p-6 text-center shadow-sm">
                          <Spinner />
                        </div>
                      }
                    >
                      <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
                        <CSSDemo />
                      </div>
                    </React.Suspense>
                  }
                />
                <Route path="*" element={<Root />} />
              </Routes>
            </div>
          </main>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default App;
