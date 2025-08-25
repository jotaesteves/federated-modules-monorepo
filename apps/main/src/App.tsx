import * as React from 'react';
import { Routes, Route } from 'react-router';

// Layouts
import DashboardLayout from './layouts/DashboardLayout';
import BaseLayout from './layouts/BaseLayout';
import SidebarLayout from './layouts/SidebarLayout';

// Dashboard Pages
import {
  Vision360Page,
  PersonalDataPage,
  AssetsProductsPage,
  ChannelsAndServicesPage,
  HistoryInteractionsPage,
} from './pages/Dashboard';

// Sidebar Pages
import {
  HomePage,
  RecordsPage,
  SalesPage,
  OutboundsPage,
  ScriptsViewPage,
  SettingsViewPage,
  KpisPage,
  DocumentationPage,
} from './pages/Sidebar';

const App: React.FC = () => {
  return (
    <Routes>
      {/* Dashboard routes with DashboardLayout */}
      <Route path="/" element={<DashboardLayout />}>
        <Route path="home/*" element={<HomePage />} />
        <Route path="registos/*" element={<RecordsPage />} />
        <Route path="vendas/*" element={<SalesPage />} />
        <Route path="outbounds/*" element={<OutboundsPage />} />
        <Route path="scripts/*" element={<ScriptsViewPage />} />
        <Route path="settings-view/*" element={<SettingsViewPage />} />
        <Route path="kpis/*" element={<KpisPage />} />
        <Route path="documentation/*" element={<DocumentationPage />} />
        <Route path="vision-360/*" element={<Vision360Page />} />
        <Route path="personal-data/*" element={<PersonalDataPage />} />
        <Route path="assets-products/*" element={<AssetsProductsPage />} />
        <Route path="channels-and-services/*" element={<ChannelsAndServicesPage />} />
        <Route path="history-interactions/*" element={<HistoryInteractionsPage />} />
        <Route index element={<HomePage />} />
      </Route>

      {/* Settings routes with BaseLayout */}
      <Route path="/pesquisa" element={<BaseLayout />}></Route>

      <Route path="/definicoes" element={<SidebarLayout />} />

      {/* Catch-all route */}
      <Route path="*" element={<DashboardLayout />} />
    </Routes>
  );
};

export default App;
