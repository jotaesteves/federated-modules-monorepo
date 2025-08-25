import * as React from 'react';
import Spinner from 'shared/components/Spinner';

const Kpis = React.lazy(() => import('kpis/Kpis'));

export const KpisPage: React.FC = () => {
  return (
    <React.Suspense fallback={<Spinner />}>
      <Kpis />
    </React.Suspense>
  );
};

export default KpisPage;
