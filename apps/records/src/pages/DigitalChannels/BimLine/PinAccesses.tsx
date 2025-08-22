import * as React from 'react';
export const PinAccesses: React.FC = () => {
  return (
    <React.Suspense fallback={<div>Loading PinAccesses...</div>}>
      <h1>PinAccesses from BimLine</h1>
    </React.Suspense>
  );
};
export default PinAccesses;
