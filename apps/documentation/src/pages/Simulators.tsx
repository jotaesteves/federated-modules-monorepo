import * as React from 'react';
export const Simulators: React.FC = () => {
  return (
    <React.Suspense fallback={<div>Loading Simulators...</div>}>
      <h1>Simulators from </h1>
    </React.Suspense>
  );
};
export default Simulators;
