import * as React from 'react';
import { Routes, Route } from 'react-router';

// Layouts
import DashboardLayout from './layouts/DashboardLayout';
import BaseLayout from './layouts/BaseLayout';
import SidebarLayout from './layouts/SidebarLayout';

// Dashboard Pages
const Vision360Page = React.lazy(() => import('./pages/Dashboard/Vision360Page'));
const PersonalDataPage = React.lazy(() => import('./pages/Dashboard/PersonalDataPage'));
const AssetsProductsPage = React.lazy(() => import('./pages/Dashboard/AssetsProductsPage'));
const ChannelsAndServicesPage = React.lazy(
  () => import('./pages/Dashboard/ChannelsAndServicesPage')
);
const HistoryInteractionsPage = React.lazy(
  () => import('./pages/Dashboard/HistoryInteractionsPage')
);
const RecordsPage = React.lazy(() => import('./pages/Dashboard/RecordsPage'));
const SalesPage = React.lazy(() => import('./pages/Dashboard/SalesPage'));

// Sidebar Pages
import HomePage from './pages/Sidebar/HomePage';

const App: React.FC = () => {
  return (
    <React.Suspense fallback={null}>
      <Routes>
        {/* Dashboard routes with DashboardLayout */}
        <Route path="/" element={<DashboardLayout />}>
          <Route path="home/*" element={<HomePage />} />
          <Route path="vision-360/*" element={<Vision360Page />} />
          <Route path="personal-data/*" element={<PersonalDataPage />} />
          <Route path="assets-products/*" element={<AssetsProductsPage />} />
          <Route path="channels-and-services/*" element={<ChannelsAndServicesPage />} />
          <Route path="history-interactions/*" element={<HistoryInteractionsPage />} />
          <Route path="records/*" element={<RecordsPage />} />
          <Route path="sales/*" element={<SalesPage />} />
          <Route index element={<HomePage />} />
        </Route>

        {/* Settings routes with BaseLayout */}
        <Route path="/pesquisa" element={<BaseLayout />}></Route>

        <Route path="/definicoes" element={<SidebarLayout />} />

        {/* Catch-all route */}
        <Route path="*" element={<DashboardLayout />} />
      </Routes>
    </React.Suspense>
  );
};

export default App;
