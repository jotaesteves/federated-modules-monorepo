import { createRoot } from 'react-dom/client';
import { Helmet } from 'react-helmet';
import 'shared/styles/global-import';

import HistoryInteractions from './HistoryInteractions';

const container = document.getElementById('app');

if (!container) {
  throw new Error('Root element with id "app" not found');
}

const root = createRoot(container);
root.render(
  <>
    <Helmet>
      <title>Histórico Interações</title>
    </Helmet>
    <HistoryInteractions />
  </>
);
