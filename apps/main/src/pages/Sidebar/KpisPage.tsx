import * as React from 'react';
import { Spinner } from '../../components';

const Kpis = React.lazy(() => import('kpis/Kpis'));

export const KpisPage: React.FC = () => {
  return (
    <React.Suspense fallback={<Spinner />}>
      <Kpis />
    </React.Suspense>
  );
};

export default KpisPage;
