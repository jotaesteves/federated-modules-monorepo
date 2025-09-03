import { createRoot } from 'react-dom/client';
import Global from 'shared/styles/Global';
import Records from './Records';

const container = document.getElementById('app');
if (!container) {
  throw new Error('Failed to find the root element');
}
const root = createRoot(container);
root.render(
  <>
    <Global />
    <Records />
  </>
);
