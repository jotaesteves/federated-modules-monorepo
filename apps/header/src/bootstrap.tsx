import { createRoot } from 'react-dom/client';
import { Helmet } from 'react-helmet';
import { BrowserRouter } from 'react-router';
import 'shared/styles/global-import';

import Header from './Header';
import SideBarNav from './Sidebar';

const container = document.getElementById('app');

const root = createRoot(container!);
root.render(
  <>
    <Helmet>
      <title>Header App</title>
    </Helmet>
    <BrowserRouter>
      <Header />
      <SideBarNav />
    </BrowserRouter>
  </>
);
