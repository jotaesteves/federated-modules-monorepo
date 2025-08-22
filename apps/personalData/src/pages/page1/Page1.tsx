import React from 'react';
import { Link } from 'react-router';
import Button from 'shared/components/Button';
import InputWithLabel from 'shared/components/InputWithLabel';
import useFilms from 'shared/queries/useFilms';
import { useCountStore } from 'shared/stores/count';

const Page1: React.FC = () => {
  const { increment, decrement } = useCountStore();
  const { data, status } = useFilms();
  return (
    <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="text-xl font-semibold">This is page 1 of app1</h2>
      <p className="mt-1 text-sm text-slate-600">This page has a text input and 2 buttons</p>

      <div className="mt-4 flex items-center gap-3">
        <Button onClick={increment}>Increment</Button>
        <Button onClick={decrement}>Decrement</Button>
      </div>

      <div className="mt-6">
        <h3 className="text-sm font-semibold text-slate-700">Films</h3>
        {status === 'loading' && (
          <div className="mt-2 rounded-md bg-slate-50 p-3 text-slate-600 ring-1 ring-inset ring-slate-200">
            Loading...
          </div>
        )}
        {status === 'error' && (
          <div className="mt-2 rounded-md bg-red-50 p-3 text-red-700 ring-1 ring-inset ring-red-200">
            Error
          </div>
        )}
        {status === 'success' && data && (
          <ul className="mt-2 divide-y divide-slate-200 overflow-hidden rounded-md border border-slate-200">
            {data.results.map((film) => {
              const filmUrlParts = film.url.split('/').filter(Boolean);
              const filmId = filmUrlParts[filmUrlParts.length - 1];
              return (
                <li key={filmId} className="bg-white p-3">
                  <div className="flex items-baseline justify-between">
                    <p>
                      <span className="text-slate-500">Ep {film.episode_id}.</span> {film.title}
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
      </div>

      <div className="mt-6">
        <InputWithLabel label="App1 page1 label" />
      </div>

      <p className="mt-6 text-sm">
        Go to{' '}
        <Link className="text-sky-600 hover:text-sky-700" to="../page-2">
          page-2
        </Link>
      </p>
    </div>
  );
};

export default Page1;
