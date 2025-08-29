import * as React from 'react';
export const Forms: React.FC = () => {
  return (
    <React.Suspense fallback={<div>Loading Forms...</div>}>
      <h1>Forms </h1>
    </React.Suspense>
  );
};
export default Forms;
