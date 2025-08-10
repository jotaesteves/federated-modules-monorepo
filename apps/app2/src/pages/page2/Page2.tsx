import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'shared/components/Button';
import { useCountStore } from 'shared/stores/count';
import useFilms from 'shared/queries/useFilms';
import Image from '../../assets/images/meme2.jpg';

const Page1: React.FC = () => {
  const { increment, decrement } = useCountStore();
  const { data, status } = useFilms();
  return (
    <>
      <div>
        <h2>This is page 2 of app2</h2>
        <p>This page has a button and 2 meme images!! (one is imported from shared)</p>
        <Button onClick={increment}>Wow! Great memes! - increment</Button>
        <Button onClick={decrement}>No! Bad memes! - decrement</Button>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }}></div>
        <div>
          <img src={Image} alt="Meme 2" />
        </div>
      </div>
      <p>Also Films (same as app1):</p>
      {status === 'loading' ? <p>Loading...</p> : ''}
      {status === 'error' ? <p>Error</p> : ''}
      {status === 'success' && data
        ? data.results.map((film) => {
            const filmUrlParts = film.url.split('/').filter(Boolean);
            const filmId = filmUrlParts[filmUrlParts.length - 1];
            return (
              <article key={filmId}>
                {film.episode_id}. {film.title}{' '}
                <em>({new Date(Date.parse(film.release_date)).getFullYear()})</em>
              </article>
            );
          })
        : ''}

      <p>
        Go to <Link to="../page-1">page-1</Link>
      </p>
    </>
  );
};

export default Page1;
