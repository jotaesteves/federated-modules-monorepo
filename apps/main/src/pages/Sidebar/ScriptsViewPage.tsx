import * as React from 'react';
import Spinner from 'shared/components/Spinner';

const ScriptsView = React.lazy(() => import('scripts/ScriptsView'));

export const ScriptsViewPage: React.FC = () => {
  return (
    <React.Suspense fallback={<Spinner />}>
      <ScriptsView />
    </React.Suspense>
  );
};

export default ScriptsViewPage;
