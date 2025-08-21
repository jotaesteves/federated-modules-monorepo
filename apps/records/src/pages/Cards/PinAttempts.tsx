import * as React from 'react';
export const PinAttempts: React.FC = () => {
  return (
    <React.Suspense fallback={<div>Loading PinAttempts...</div>}>
      <h1>PinAttempts from Cards</h1>
    </React.Suspense>
  );
};
export default PinAttempts;
