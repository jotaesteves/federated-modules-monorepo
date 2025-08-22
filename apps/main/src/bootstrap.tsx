import { createRoot } from 'react-dom/client';
import { BrowserRouter, useNavigate } from 'react-router';
import { QueryClientProvider } from '@tanstack/react-query';
import queryClient from 'shared/queries/client';
import GlobalStylesProvider from 'shared/styles/Global';
import App from './App';
import { MicroFrontendProvider } from 'shared/providers/MicroFrontendProvider';

declare global {
  interface Window {
    microFrontendNavigation?: {
      navigateTo: (path: string) => void;
      getRouteFromTab?: (tab: string) => string;
      getTabFromRoute?: (route: string) => string;
    };
  }
}

const container = document.getElementById('app');
const root = createRoot(container!);

function NavigationBridge({ children }: { children: React.ReactNode }) {
  const navigate = useNavigate();

  // Install global navigation helpers so shared globalStore can navigate via router
  if (typeof window !== 'undefined') {
    window.microFrontendNavigation = {
      navigateTo: (path: string) => navigate(path),
      getRouteFromTab: (tab: string) => {
        const map: Record<string, string> = {
          Vision360: '/vision-360',
          personalData: '/personal-data',
          assetsProducts: '/assets-products',
          channelsAndServices: '/channels-and-services',
          historyInteractions: '/history-interactions',
        };
        return map[tab] ?? '/';
      },
      getTabFromRoute: (route: string) => {
        const pairs: Array<[string, string]> = [
          ['/vision-360', 'Vision360'],
          ['/personal-data', 'personalData'],
          ['/assets-products', 'assetsProducts'],
          ['/channels-and-services', 'channelsAndServices'],
          ['/history-interactions', 'historyInteractions'],
        ];
        const match = pairs.find(([path]) => route.startsWith(path));
        return match ? match[1] : '';
      },
    };
  }

  return <>{children}</>;
}

root.render(
  <>
    <GlobalStylesProvider>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <MicroFrontendProvider>
            <NavigationBridge>
              <App />
            </NavigationBridge>
          </MicroFrontendProvider>
        </BrowserRouter>
      </QueryClientProvider>
    </GlobalStylesProvider>
  </>
);
