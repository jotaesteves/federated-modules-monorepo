import { createRoot } from 'react-dom/client';
import Global from 'shared/styles/Global';

import Kpis from './Kpis';
const container = document.getElementById('app');
const root = createRoot(container!);
root.render(
  <>
    <Global />
    <Kpis />
  </>
);
