import { createRoot } from 'react-dom/client';
import Global from 'shared/styles/Global';

import FullVision from './Vision360';

const container = document.getElementById('app');

if (!container) {
  throw new Error('Root element with id "app" not found');
}

const root = createRoot(container);
root.render(
  <>
    <Global />
    <FullVision />
  </>
);
