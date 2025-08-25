import * as React from 'react';
import Spinner from 'shared/components/Spinner';

const SettingsView = React.lazy(() => import('settingsView/SettingsView'));

export const SettingsViewPage: React.FC = () => {
  return (
    <React.Suspense fallback={<Spinner />}>
      <SettingsView />
    </React.Suspense>
  );
};

export default SettingsViewPage;
