import { createRoot } from 'react-dom/client';
import Global from 'shared/styles/Global';

import ScriptsView from './ScriptsView';
const container = document.getElementById('app');
const root = createRoot(container!);
root.render(
  <>
    <Global />
    <ScriptsView />
  </>
);
