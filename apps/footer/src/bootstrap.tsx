import { QueryClientProvider } from '@tanstack/react-query';
import { createRoot } from 'react-dom/client';
import { Helmet } from 'react-helmet';
import { BrowserRouter } from 'react-router';
import queryClient from 'shared/queries/client';
import Global from 'shared/styles/Global';
import Footer from './Footer';

const container = document.getElementById('app');
if (!container) {
  throw new Error('Root element #app not found');
}
const root = createRoot(container);
root.render(
  <>
    <Helmet>
      <title>Footer App</title>
    </Helmet>
    <Global />
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    </QueryClientProvider>
  </>
);
