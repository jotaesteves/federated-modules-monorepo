import * as React from 'react';
export const Eligibility: React.FC = () => {
  return (
    <React.Suspense fallback={<div>Loading Eligibility...</div>}>
      <h1>Eligibility from Loans</h1>
    </React.Suspense>
  );
};
export default Eligibility;
