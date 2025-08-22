import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { QueryClientProvider } from '@tanstack/react-query';
import Global from 'shared/styles/Global';
import AssetsProducts from './AssetsProducts';

const container = document.getElementById('app');

const root = createRoot(container!);
root.render(
  <>
    <Global />
    <BrowserRouter>
      <AssetsProducts />
    </BrowserRouter>
  </>
);
