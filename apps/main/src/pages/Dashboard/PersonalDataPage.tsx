import * as React from 'react';
import Spinner from '../../components/common/Spinner';

const PersonalData = React.lazy(() => import('personalData/PersonalData'));

export const PersonalDataPage: React.FC = () => {
  return (
    <React.Suspense
      fallback={
        <div className="rounded-lg border border-slate-200 bg-white p-6 text-center shadow-sm">
          <Spinner />
        </div>
      }
    >
      <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
        <PersonalData />
      </div>
    </React.Suspense>
  );
};

export default PersonalDataPage;
