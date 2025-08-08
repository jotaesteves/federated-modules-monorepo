import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useCountStore } from 'shared/stores/count';
import useFilms from 'shared/queries/useFilms';
import NavBar from './components/NavBar/NavBar';
import Root from './pages/Root/Root';

/**
 * if safe import is needed (in case of remote bundle loading fails)
 * consider using FederatedBoundary https://github.com/module-federation/universe/tree/main/packages/utilities#react-utilities
 */
const App1 = React.lazy(() => import('app1/App1'));
const App2 = React.lazy(() => import('app2/App2'));

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
  const { data, status } = useFilms();
  return (
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

          {/* Star Wars fetch card */}
          <section className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
            <h2 className="text-sm font-semibold text-slate-700">First Star Wars movie</h2>
            <div className="mt-3">
              {status === 'loading' && (
                <div className="rounded-md bg-slate-50 p-3 ring-1 ring-inset ring-slate-200">
                  <Spinner />
                </div>
              )}
              {status === 'error' && (
                <div className="rounded-md bg-red-50 p-3 text-red-700 ring-1 ring-inset ring-red-200">
                  Error fetching films
                </div>
              )}
              {status === 'success' && data && (
                <ul className="divide-y divide-slate-200 overflow-hidden rounded-md border border-slate-200">
                  {data.results.slice(0, 1).map((film) => {
                    const filmUrlParts = film.url.split('/').filter(Boolean);
                    const filmId = filmUrlParts[filmUrlParts.length - 1];
                    return (
                      <li key={filmId} className="bg-white p-4">
                        <div className="flex items-baseline justify-between">
                          <p className="text-lg font-medium">
                            <span className="text-slate-500">Episode {film.episode_id}.</span>{' '}
                            {film.title}
                          </p>
                          <em className="text-sm text-slate-500">
                            {new Date(Date.parse(film.release_date)).getFullYear()}
                          </em>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              )}
              {status === 'success' && data && (
                <p className="mt-2 text-sm text-slate-600">
                  To ensure that react query works OK:{' '}
                  <span className="font-mono">{data.randomNumber}</span>
                </p>
              )}
            </div>
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
            <Route path="*" element={<Root />} />
          </Routes>
        </main>
      </div>
    </div>
  );
};

export default App;
