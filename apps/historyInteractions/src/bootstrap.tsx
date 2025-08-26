import { createRoot } from 'react-dom/client';
import { Helmet } from 'react-helmet';
import 'shared/styles/global-import';

import HistoryInteractions from './HistoryInteractions';

const container = document.getElementById('app');

const root = createRoot(container!);
root.render(
  <>
    <Helmet>
      <title>Histórico Interações</title>
    </Helmet>
    <HistoryInteractions />
  </>
);
