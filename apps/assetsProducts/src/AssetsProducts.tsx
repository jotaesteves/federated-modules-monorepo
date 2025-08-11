import React from 'react';
import { Helmet } from 'react-helmet';
import { AssetsColumns } from './components/AssetsColumns/AssetsColumns';
import { DetailsSection } from './components/DetailsSection/DetailsSection';

const AssetsProducts: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Assets Products</title>
      </Helmet>
      <div className="p-2 h-full max-h-[calc(75vh)] overflow-y-auto">
        <div className="relative h-full grid grid-cols-24 gap-2">
          <AssetsColumns />
          <DetailsSection />
        </div>
      </div>
    </>
  );
};

export default AssetsProducts;
