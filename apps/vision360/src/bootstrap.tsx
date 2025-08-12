import { createRoot } from 'react-dom/client';
import Global from 'shared/styles/Global';
import FullVision from './Vision360';

const container = document.getElementById('app');
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const root = createRoot(container!);
root.render(
  <>
    <Global />
    <FullVision />
  </>
);
