import * as React from 'react';
import Spinner from '../../components/common/Spinner';

const App2 = React.lazy(() => import('app2/App2'));

export const App2Page: React.FC = () => {
  return (
    <React.Suspense
      fallback={
        <div className="rounded-lg border border-slate-200 bg-white p-6 text-center shadow-sm">
          <Spinner />
        </div>
      }
    >
      <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
        <App2 />
      </div>
    </React.Suspense>
  );
};

export default App2Page;
