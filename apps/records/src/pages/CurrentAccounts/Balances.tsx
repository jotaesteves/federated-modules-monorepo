import * as React from 'react';
export const Balances: React.FC = () => {
  return (
    <React.Suspense fallback={<div>Loading Balances...</div>}>
      <h1>Balances from CurrentAccounts</h1>
    </React.Suspense>
  );
};
export default Balances;
