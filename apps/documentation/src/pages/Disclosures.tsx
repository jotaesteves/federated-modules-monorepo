import * as React from 'react';
export const Disclosures: React.FC = () => {
  return (
    <React.Suspense fallback={<div>Loading Disclosures...</div>}>
      <h1>Disclosures </h1>
    </React.Suspense>
  );
};
export default Disclosures;
