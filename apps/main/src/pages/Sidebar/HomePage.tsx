import * as React from 'react';
import { HistoryInteractionsPage } from '../Dashboard';
const { lazy, Suspense } = React;

const Home = lazy(() => import('home/Home'));

const HomePage: React.FC = () => {
  return (
    <Suspense fallback={<div>Loading HomePage...</div>}>
      <Home />
    </Suspense>
  );
};

export default HomePage;
