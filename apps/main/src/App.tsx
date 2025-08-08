import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useCountStore } from 'shared/stores/count';
import NavBar from './components/NavBar/NavBar';
import Root from './pages/Root/Root';

/**
 * if safe import is needed (in case of remote bundle loading fails)
 * consider using FederatedBoundary https://github.com/module-federation/universe/tree/main/packages/utilities#react-utilities
 */
const App1 = React.lazy(() => import('app1/App1'));
const App2 = React.lazy(() => import('app2/App2'));
// Add CSS demo page (local)
const CSSDemo = React.lazy(() => import('./pages/CSSDemo'));
const Header = React.lazy(() => import('header/Header'));
const Footer = React.lazy(() => import('footer/Footer'));

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
    <>
      <Header />
      <div className="min-h-screen bg-slate-50 text-slate-900">
        <div className="mx-auto max-w-5xl px-4 py-8">
          <header className="mb-6">
            <h1 className="text-3xl font-bold tracking-tight">This is the main app</h1>
            <p className="mt-1 text-sm text-slate-600">
              Host shell that mounts remote microfrontends.
            </p>
          </header>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {/* Counter card */}
            <section className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
              <h2 className="text-sm font-semibold text-slate-700">Counter</h2>
              <p className="mt-2 text-2xl font-semibold">{count}</p>
            </section>
          </div>

          <div className="mt-10">
            <p className="mb-3 text-sm text-slate-600">
              Below is NavBar (host), tabs navigate to remote apps mounted via Module Federation.
            </p>
            <div className="rounded-lg border border-slate-200 bg-white p-3 shadow-sm">
              <NavBar />
            </div>
          </div>

          <main className="mt-6">
            <Routes>
              {/* Use absolute paths to ensure matching */}
              <Route
                path="/app-1/*"
                element={
                  <React.Suspense
                    fallback={
                      <div className="rounded-lg border border-slate-200 bg-white p-6 text-center shadow-sm">
                        <Spinner />
                      </div>
                    }
                  >
                    <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
                      <App1 />
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
          </main>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default App;
