import * as React from 'react';
import Spinner from 'shared/components/Spinner';

const Sales = React.lazy(() => import(/* webpackPrefetch: true */ 'sales/Sales'));

const SalesPage: React.FC = () => {
  return (
    <React.Suspense fallback={<Spinner />}>
      <Sales />
    </React.Suspense>
  );
};

export default SalesPage;
