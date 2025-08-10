import * as React from 'react';
import Spinner from 'shared/components/Spinner';

const Vision360 = React.lazy(() => import('vision360/Vision360'));

export const Vision360Page: React.FC = () => {
  return (
    <React.Suspense
      fallback={
        <div className="rounded-lg border border-slate-200 bg-white p-6 text-center shadow-sm">
          <Spinner />
        </div>
      }
    >
      <div className="rounded-lg border border-slate-200 bg-gray-100 shadow-sm w-full">
        <Vision360 />
      </div>
    </React.Suspense>
  );
};

export default Vision360Page;
