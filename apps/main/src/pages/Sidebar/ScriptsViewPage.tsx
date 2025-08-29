import * as React from 'react';
import { Spinner } from '../../components';

const ScriptsView = React.lazy(() => import('scriptsView/ScriptsView'));

export const ScriptsViewPage: React.FC = () => {
  return (
    <React.Suspense fallback={<Spinner />}>
      <ScriptsView />
    </React.Suspense>
  );
};

export default ScriptsViewPage;
