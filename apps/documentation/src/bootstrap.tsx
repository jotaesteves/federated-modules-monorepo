import { createRoot } from 'react-dom/client';
import Global from 'shared/styles/Global';

import Documentation from './Documentation';

const container = document.getElementById('app');
if (!container) {
  throw new Error('Root element #app not found');
}
const root = createRoot(container);
root.render(
  <>
    <Global />
    <Documentation />
  </>
);
