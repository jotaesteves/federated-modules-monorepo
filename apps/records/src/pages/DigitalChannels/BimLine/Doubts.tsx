import * as React from 'react';
export const Doubts: React.FC = () => {
  return (
    <React.Suspense fallback={<div>Loading Doubts...</div>}>
      <h1>Doubts from BimLine</h1>
    </React.Suspense>
  );
};
export default Doubts;
