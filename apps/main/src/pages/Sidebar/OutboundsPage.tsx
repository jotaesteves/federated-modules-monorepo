import * as React from 'react';
import { Spinner } from '../../components';

const Outbounds = React.lazy(() => import('outbounds/Outbounds'));

export const OutboundsPage: React.FC = () => {
  return (
    <React.Suspense fallback={<Spinner />}>
      <Outbounds />
    </React.Suspense>
  );
};

export default OutboundsPage;
