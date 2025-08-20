import React, { lazy, Suspense } from 'react';
import Spinner from 'shared/components/Spinner';

const Records = React.lazy(() => import('records/Records'));

export default function SomeRoute() {
  return (
    <Suspense fallback={<div>Loading de Registos...</div>}>
      <Records />
    </Suspense>
  );
}
