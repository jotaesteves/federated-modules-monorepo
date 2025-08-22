import * as React from 'react';
export const MtopIssues: React.FC = () => {
  return (
    <React.Suspense fallback={<div>Loading MtopIssues...</div>}>
      <h1>MtopIssues from Other</h1>
    </React.Suspense>
  );
};
export default MtopIssues;
