import * as React from 'react';
import FallbackSpinner from '../../components/FallbackSpinner/FallbackSpinner';

const AssetsProducts = React.lazy(() => import('assetsProducts/AssetsProducts'));

export const AssetsProductsPage: React.FC = () => {
  return (
    <React.Suspense
      fallback={
        <div className=" bg-white p-6 text-center">
          <FallbackSpinner />
        </div>
      }
    >
      <div className=" bg-gray-100 h-full">
        <AssetsProducts />
      </div>
    </React.Suspense>
  );
};

export default AssetsProductsPage;
