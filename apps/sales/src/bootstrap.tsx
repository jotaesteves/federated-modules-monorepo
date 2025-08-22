import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import Global from 'shared/styles/Global';
import Sales from './Sales';

const container = document.getElementById('app');
const root = createRoot(container!);
root.render(
  <>
    <Global />
    <BrowserRouter>
      <Sales />
    </BrowserRouter>
  </>
);
