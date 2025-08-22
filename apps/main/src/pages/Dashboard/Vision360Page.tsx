import * as React from 'react';
import FallbackSpinner from '../../components/FallbackSpinner/FallbackSpinner';

const Vision360 = React.lazy(() => import('vision360/Vision360'));

export const Vision360Page: React.FC = () => {
  return (
    <React.Suspense fallback={<FallbackSpinner />}>
      <Vision360 />
    </React.Suspense>
  );
};

export default Vision360Page;
