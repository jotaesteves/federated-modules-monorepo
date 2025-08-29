import * as React from 'react';
export const Calculators: React.FC = () => {
  return (
    <React.Suspense fallback={<div>Loading Calculators...</div>}>
      <h1>Calculators</h1>
    </React.Suspense>
  );
};
export default Calculators;
