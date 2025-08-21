import * as React from 'react';
export const Accesses: React.FC = () => {
  return (
    <React.Suspense fallback={<div>Loading Accesses...</div>}>
      <h1>Accesses from InternetBanking</h1>
    </React.Suspense>
  );
};
export default Accesses;
