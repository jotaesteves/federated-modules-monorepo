import * as React from 'react';
export const TopUps: React.FC = () => {
  return (
    <React.Suspense fallback={<div>Loading TopUps...</div>}>
      <h1>TopUps from MobileBanking</h1>
    </React.Suspense>
  );
};
export default TopUps;
