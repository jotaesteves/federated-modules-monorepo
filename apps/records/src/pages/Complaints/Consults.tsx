import * as React from 'react';
export const Consults: React.FC = () => {
  return (
    <React.Suspense fallback={<div>Loading Consults...</div>}>
      <h1>Consults from Complaints</h1>
    </React.Suspense>
  );
};
export default Consults;
