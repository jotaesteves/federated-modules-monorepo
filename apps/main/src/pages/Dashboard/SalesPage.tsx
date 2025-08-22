import * as React from 'react';
import Spinner from 'shared/components/Spinner';

const Sales = React.lazy(() => import('sales/Sales'));

export const SalesPage: React.FC = () => {
  return (
    <React.Suspense fallback={<Spinner />}>
      <Sales />
    </React.Suspense>
  );
};

export default SalesPage;
