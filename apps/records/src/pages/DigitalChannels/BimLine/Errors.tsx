import * as React from 'react';
export const Errors: React.FC = () => {
  return (
    <React.Suspense fallback={<div>Loading Errors...</div>}>
      <h1>Errors from BimLine</h1>
    </React.Suspense>
  );
};
export default Errors;
