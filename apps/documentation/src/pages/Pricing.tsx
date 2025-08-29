import * as React from 'react';
export const Pricing: React.FC = () => {
  return (
    <React.Suspense fallback={<div>Loading Pricing...</div>}>
      <h1>Pricing</h1>
    </React.Suspense>
  );
};
export default Pricing;
