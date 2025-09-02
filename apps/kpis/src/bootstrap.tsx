import { createRoot } from 'react-dom/client';
import Global from 'shared/styles/Global';

import Kpis from './Kpis';

const container = document.getElementById('app');
if (!container) {
  throw new Error('Root element #app not found');
}
const root = createRoot(container);
root.render(
  <>
    <Global />
    <Kpis />
  </>
);
