import * as React from 'react';
import Spinner from 'shared/components/Spinner';

const AssetsProducts = React.lazy(() => import('assetsProducts/AssetsProducts'));

export const AssetsProductsPage: React.FC = () => {
  return (
    <React.Suspense
      fallback={
        <div className=" bg-white p-6 text-center">
          <Spinner />
        </div>
      }
    >
      <div className=" bg-gray-100 h-full overflow-y-scroll">
        <AssetsProducts />
      </div>
    </React.Suspense>
  );
};

export default AssetsProductsPage;
