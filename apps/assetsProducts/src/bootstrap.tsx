import { createRoot } from 'react-dom/client';
import Global from 'shared/styles/Global';
import AssetsProducts from './AssetsProducts';

const container = document.getElementById('app');
if (!container) throw new Error('App container not found');
const root = createRoot(container);
root.render(
  <>
    <Global />
    <AssetsProducts />
  </>
);
