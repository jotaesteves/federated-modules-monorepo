import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useNavigationService } from './hooks/useNavigationService';

// Layouts
import DashboardLayout from './layouts/DashboardLayout';
import BaseLayout from './layouts/BaseLayout';

// Dashboard Pages
import {
  Vision360Page,
  PersonalDataPage,
  AssetsProductsPage,
  ChannelsAndServicesPage,
  HistoryInteractionsPage,
  RecordsPage,
} from './pages/Dashboard';

// Root page
import Root from './pages/Sidebar/Root';

const App: React.FC = () => {
  // Initialize navigation service integration
  useNavigationService();

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
        <Route index element={<Root />} />
      </Route>

      {/* Settings routes with BaseLayout */}
      <Route path="/pesquisa" element={<BaseLayout />}>
        <Route index element={<> TODO: Add Pesquisa </>} />
      </Route>

      <Route path="/definicoes" element={<BaseLayout />}>
        <Route index element={<> TODO: Add Definicoes </>} />
      </Route>

      {/* Catch-all route */}
      <Route path="*" element={<DashboardLayout />} />
    </Routes>
  );
};

export default App;
