import * as React from 'react';
export const DigitalWallets: React.FC = () => {
  return (
    <React.Suspense fallback={<div>Loading DigitalWallets...</div>}>
      <h1>DigitalWallets from Complaints</h1>
    </React.Suspense>
  );
};
export default DigitalWallets;
