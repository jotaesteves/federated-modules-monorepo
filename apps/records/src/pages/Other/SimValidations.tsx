import * as React from 'react';
export const SimValidations: React.FC = () => {
  return (
    <React.Suspense fallback={<div>Loading SimValidations...</div>}>
      <h1>SimValidations from Other</h1>
    </React.Suspense>
  );
};
export default SimValidations;
