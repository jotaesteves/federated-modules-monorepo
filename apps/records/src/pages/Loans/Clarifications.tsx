import * as React from 'react';
export const Clarifications: React.FC = () => {
  return (
    <React.Suspense fallback={<div>Loading Clarifications...</div>}>
      <h1>Clarifications from Loans</h1>
    </React.Suspense>
  );
};
export default Clarifications;
