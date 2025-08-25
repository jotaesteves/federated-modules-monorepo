import * as React from 'react';
import Spinner from 'shared/components/Spinner';

const Documentation = React.lazy(() => import('documentation/Documentation'));

export const DocumentationPage: React.FC = () => {
  return (
    <React.Suspense fallback={<Spinner />}>
      <Documentation />
    </React.Suspense>
  );
};

export default DocumentationPage;
