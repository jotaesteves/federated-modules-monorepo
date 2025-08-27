import * as React from 'react';
import { Routes, Route, Navigate } from 'react-router';

// Layouts
import DashboardLayout from './layouts/DashboardLayout';
import BaseLayout from './layouts/BaseLayout';
import SidebarLayout from './layouts/SidebarLayout';

// Rotas de Registos
import { getRoutesForOutlet, type RouteConfig } from 'records/Records';

// Rotas de Registos
import { getRoutesForOutlet, type RouteConfig } from 'records/Records';

// Rotas de Registos
import { getRoutesForOutlet, type RouteConfig } from 'records/Records';

// Rotas de Registos
import { getRoutesForOutlet, type RouteConfig } from 'records/Records';

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
// Sidebar Pages
const RecordsPage = React.lazy(() => import('./pages/Sidebar/RecordsPage'));
const SalesPage = React.lazy(() => import('./pages/Sidebar/SalesPage'));
const OutboundsPage = React.lazy(() => import('./pages/Sidebar/OutboundsPage'));
const ScriptsViewPage = React.lazy(() => import('./pages/Sidebar/ScriptsViewPage'));
const SettingsViewPage = React.lazy(() => import('./pages/Sidebar/SettingsViewPage'));
const KpisPage = React.lazy(() => import('./pages/Sidebar/KpisPage'));
const DocumentationPage = React.lazy(() => import('./pages/Sidebar/DocumentationPage'));
const HomePage = React.lazy(() => import('./pages/Sidebar/HomePage'));

const App: React.FC = () => {
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <Routes>
        {/* Dashboard routes with DashboardLayout */}
        <Route path="/" element={<DashboardLayout />}>
          <Route path="vision-360/*" element={<Vision360Page />} />
          <Route path="personal-data/*" element={<PersonalDataPage />} />
          <Route path="assets-products/*" element={<AssetsProductsPage />} />
          <Route path="channels-and-services/*" element={<ChannelsAndServicesPage />} />
          <Route path="history-interactions/*" element={<HistoryInteractionsPage />} />
          <Route index element={<HomePage />} />
          {/* Sidebar routes with BaseLayout */}
          <Route path="home/*" element={<HomePage />} />
          <Route path="records" element={<RecordsPage />}>
            <Route index element={<Navigate to="home" replace />} />
            {getRoutesForOutlet().map((route: RouteConfig) => (
              <Route key={route.path} path={route.path} element={<route.component />} />
            ))}
            <Route path="*" element={<Navigate to="home" replace />} />
          </Route>
          <Route path="sales/*" element={<SalesPage />} />
          <Route path="outbounds/*" element={<OutboundsPage />} />
          <Route path="scripts/*" element={<ScriptsViewPage />} />
          <Route path="settings/*" element={<SettingsViewPage />} />
          <Route path="kpis/*" element={<KpisPage />} />
          <Route path="documentation/*" element={<DocumentationPage />} />
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
