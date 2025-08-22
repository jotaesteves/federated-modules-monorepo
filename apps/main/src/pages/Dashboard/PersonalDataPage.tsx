import * as React from 'react';
import FallbackSpinner from '../../components/FallbackSpinner/FallbackSpinner';

const PersonalData = React.lazy(() => import('personalData/PersonalData'));

export const PersonalDataPage: React.FC = () => {
  return (
    <React.Suspense
      fallback={
        <div className=" bg-white p-6 text-center">
          <FallbackSpinner />
        </div>
      }
    >
      <div className=" bg-gray-100">
        <PersonalData />
      </div>
    </React.Suspense>
  );
};

export default PersonalDataPage;
