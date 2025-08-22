import * as React from 'react';
export const LoansNotReceived: React.FC = () => {
  return (
    <React.Suspense fallback={<div>Loading LoansNotReceived...</div>}>
      <h1>LoansNotReceived from CurrentAccounts</h1>
    </React.Suspense>
  );
};
export default LoansNotReceived;
