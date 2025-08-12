import * as React from 'react';
import Spinner from 'shared/components/Spinner';

const Vision360 = React.lazy(() => import('vision360/Vision360'));

export const Vision360Page: React.FC = () => {
  return (
    <React.Suspense fallback={<Spinner />}>
      <div className="rounded-lg border border-slate-200 bg-gray-100 shadow-sm w-full h-full overflow-y-scroll">
        <Vision360 />
      </div>
    </React.Suspense>
  );
};

export default Vision360Page;
