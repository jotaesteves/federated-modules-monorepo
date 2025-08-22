import * as React from 'react';
export const TermDeposits: React.FC = () => {
  return (
    <React.Suspense fallback={<div>Loading TermDeposits...</div>}>
      <h1>TermDeposits from Other</h1>
    </React.Suspense>
  );
};
export default TermDeposits;
