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
  RecordsPage,
  SalesPage,
} from './pages/Dashboard';

// Settings Pages
import { CSSDemo } from './pages/Settings';

// Root page
import Root from './pages/Root/Root';

const App: React.FC = () => {
  return (
    <Routes>
      {/* Dashboard routes with DashboardLayout */}
      <Route path="/" element={<DashboardLayout />}>
        <Route path="vision-360/*" element={<Vision360Page />} />
        <Route path="personal-data/*" element={<PersonalDataPage />} />
        <Route path="assets-products/*" element={<AssetsProductsPage />} />
        <Route path="channels-and-services/*" element={<ChannelsAndServicesPage />} />
        <Route path="history-interactions/*" element={<HistoryInteractionsPage />} />
        <Route path="records/*" element={<RecordsPage />} />
        <Route path="sales/*" element={<SalesPage />} />
        <Route index element={<Root />} />
      </Route>

      {/* Settings routes with BaseLayout */}
      <Route path="/pesquisa" element={<BaseLayout />}>
        <Route index element={<CSSDemo />} />
      </Route>

      <Route path="/definicoes" element={<SidebarLayout />} />

      {/* Catch-all route */}
      <Route path="*" element={<DashboardLayout />} />
    </Routes>
  );
};

export default App;
