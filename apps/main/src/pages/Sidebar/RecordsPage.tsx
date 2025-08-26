import * as React from 'react';
import Spinner from 'shared/components/Spinner';

const Records = React.lazy(() => import(/* webpackPrefetch: true */ 'records/Records'));

const RecordsPage: React.FC = () => {
  return (
    <React.Suspense fallback={<Spinner />}>
      <Records />
    </React.Suspense>
  );
};

export default RecordsPage;
