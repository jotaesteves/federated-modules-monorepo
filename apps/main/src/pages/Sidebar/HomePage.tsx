import * as React from 'react';
import Spinner from 'shared/components/Spinner';

const Home = React.lazy(() => import('home/Home'));

export const HomePage: React.FC = () => {
  return (
    <React.Suspense fallback={<Spinner />}>
      <Home />
    </React.Suspense>
  );
};

export default HomePage;
