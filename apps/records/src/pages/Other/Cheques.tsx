import * as React from 'react';
export const Cheques: React.FC = () => {
  return (
    <React.Suspense fallback={<div>Loading Cheques...</div>}>
      <h1>Cheques from Other</h1>
    </React.Suspense>
  );
};
export default Cheques;
