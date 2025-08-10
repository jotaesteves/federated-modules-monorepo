import React, { Suspense } from 'react';
import Spinner from 'shared/components/Spinner';

const App2 = React.lazy(() => import('app2/App2'));

export const App2Page: React.FC = () => {
  return (
    <Suspense
      fallback={
        <div className="rounded-lg border border-slate-200 bg-white p-6 text-center shadow-sm">
          <Spinner />
        </div>
      }
    >
      <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
        <App2 />
      </div>
    </Suspense>
  );
};

export default App2Page;
