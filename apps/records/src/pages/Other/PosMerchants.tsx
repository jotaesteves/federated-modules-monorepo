import * as React from 'react';
export const PosMerchants: React.FC = () => {
  return (
    <React.Suspense fallback={<div>Loading PosMerchants...</div>}>
      <h1>PosMerchants from Other</h1>
    </React.Suspense>
  );
};
export default PosMerchants;
