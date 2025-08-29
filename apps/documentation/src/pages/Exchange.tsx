import * as React from 'react';
export const Exchange: React.FC = () => {
  return (
    <React.Suspense fallback={<div>Loading Exchange...</div>}>
      <h1>Exchange</h1>
    </React.Suspense>
  );
};
export default Exchange;
