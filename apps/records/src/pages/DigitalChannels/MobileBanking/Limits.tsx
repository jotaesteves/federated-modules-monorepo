import * as React from 'react';
export const Limits: React.FC = () => {
  return (
    <React.Suspense fallback={<div>Loading Limits...</div>}>
      <h1>Limits from MobileBanking</h1>
    </React.Suspense>
  );
};
export default Limits;
