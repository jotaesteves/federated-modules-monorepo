import React from 'react';
import { Helmet } from 'react-helmet';
import { AssetsColumns } from './components/AssetsColumns/AssetsColumns';
import { AssetsProvider } from './context/AssetsContext';
import { DetailsSection } from './components/DetailsSection/DetailsSection';
import { DetailsRouter } from './components/details/DetailsRouter';

const AssetsProducts: React.FC = () => {
  return (
    <AssetsProvider>
      <Helmet>
        <title>Assets Products</title>
      </Helmet>
      <div className="p-2 h-full max-h-[calc(75vh)] overflow-hidden">
        <div className="relative h-full grid grid-cols-24 gap-2">
          <AssetsColumns />
          <DetailsSection>
            <DetailsRouter />
          </DetailsSection>
        </div>
      </div>
    </AssetsProvider>
  );
};

export default AssetsProducts;
