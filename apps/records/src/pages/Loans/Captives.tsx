import * as React from 'react';
export const Captives: React.FC = () => {
  return (
    <React.Suspense fallback={<div>Loading Captives...</div>}>
      <h1>Captives from Loans</h1>
    </React.Suspense>
  );
};
export default Captives;
