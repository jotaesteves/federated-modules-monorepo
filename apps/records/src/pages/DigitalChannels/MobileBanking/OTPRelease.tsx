import * as React from 'react';
export const OTPRelease: React.FC = () => {
  return (
    <React.Suspense fallback={<div>Loading OTPRelease...</div>}>
      <h1>OTPRelease from MobileBanking</h1>
    </React.Suspense>
  );
};
export default OTPRelease;
