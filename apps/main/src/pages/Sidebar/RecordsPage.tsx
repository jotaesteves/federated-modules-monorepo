import * as React from 'react';
import Spinner from 'shared/components/Spinner';

const Records = React.lazy(() => import('records/Records'));

export const RecordsPage: React.FC = () => {
  return (
    <React.Suspense fallback={<Spinner />}>
      <Records />
    </React.Suspense>
  );
};

export default RecordsPage;
