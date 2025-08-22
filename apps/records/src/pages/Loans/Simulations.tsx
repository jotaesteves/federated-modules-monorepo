import * as React from 'react';
export const Simulations: React.FC = () => {
  return (
    <React.Suspense fallback={<div>Loading Simulations...</div>}>
      <h1>Simulations from Loans</h1>
    </React.Suspense>
  );
};
export default Simulations;
