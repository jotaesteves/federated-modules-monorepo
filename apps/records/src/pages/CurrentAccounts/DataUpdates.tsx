import * as React from 'react';
export const DataUpdates: React.FC = () => {
  return (
    <React.Suspense fallback={<div>Loading DataUpdates...</div>}>
      <h1>DataUpdates from CurrentAccounts</h1>
    </React.Suspense>
  );
};
export default DataUpdates;
