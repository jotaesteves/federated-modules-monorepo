import * as React from 'react';
import Spinner from 'shared/components/Spinner';

const Vision360 = React.lazy(() => import(/* webpackPrefetch: true */ 'vision360/Vision360'));

const Vision360Page: React.FC = () => {
  return (
    <React.Suspense fallback={<Spinner />}>
      <Vision360 />
    </React.Suspense>
  );
};

export default Vision360Page;
