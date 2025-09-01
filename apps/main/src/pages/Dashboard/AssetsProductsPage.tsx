import * as React from 'react';
import { Spinner } from '../../components';

const AssetsProducts = React.lazy(
  () => import(/* webpackPrefetch: true */ 'assetsProducts/AssetsProducts')
);

const AssetsProductsPage: React.FC = () => {
  return (
    <React.Suspense
      fallback={
        <div className=" bg-white p-6 text-center">
          <Spinner />
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
