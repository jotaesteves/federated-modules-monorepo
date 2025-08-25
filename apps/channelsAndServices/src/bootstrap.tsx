import { createRoot } from 'react-dom/client';
import Global from 'shared/styles/Global';
import ChannelsAndServices from './ChannelsAndServices';

const container = document.getElementById('app');

const root = createRoot(container!);
root.render(
  <>
    <Global />
    <ChannelsAndServices />
  </>
);
