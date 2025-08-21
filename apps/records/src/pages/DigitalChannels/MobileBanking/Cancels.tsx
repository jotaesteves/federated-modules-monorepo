import * as React from 'react';
export const Cancels: React.FC = () => {
  return (
    <React.Suspense fallback={<div>Loading Cancels...</div>}>
      <h1>Cancels from MobileBanking</h1>
    </React.Suspense>
  );
};
export default Cancels;
