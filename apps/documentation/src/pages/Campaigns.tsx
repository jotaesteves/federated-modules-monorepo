import * as React from 'react';
export const Campaigns: React.FC = () => {
  return (
    <React.Suspense fallback={<div>Loading Campaigns...</div>}>
      <h1>Campaigns from </h1>
    </React.Suspense>
  );
};
export default Campaigns;
