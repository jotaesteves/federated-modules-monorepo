import * as React from 'react';
export const Internet: React.FC = () => {
  return (
    <React.Suspense fallback={<div>Loading Internet...</div>}>
      <h1>Internet from Cards</h1>
    </React.Suspense>
  );
};
export default Internet;
