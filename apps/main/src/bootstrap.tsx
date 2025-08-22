import { createRoot } from 'react-dom/client';
import { BrowserRouter, useNavigate } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import * as React from 'react';
import App from './App';

// Create a fallback query client in case the shared one fails
const fallbackQueryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      staleTime: 5 * 60 * 1000,
    },
  },
});

// Error boundary component for handling microfrontend load failures
class MicrofrontendErrorBoundary extends React.Component<
  { children: React.ReactNode; fallback?: React.ReactNode },
  { hasError: boolean }
> {
  constructor(props: { children: React.ReactNode; fallback?: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.warn('Microfrontend component failed to load:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback || <div>Something went wrong loading the component.</div>;
    }

    return this.props.children;
  }
}

// Lazy load shared components with error handling
const LazyGlobalStylesProvider = React.lazy(() =>
  import('shared/styles/Global').catch(() => {
    console.warn('Failed to load GlobalStylesProvider from shared module, using fallback');
    return {
      default: ({ children }: { children?: React.ReactNode }) => <>{children}</>,
    };
  })
);

const LazyMicroFrontendProvider = React.lazy(() =>
  import('shared/providers/MicroFrontendProvider').catch(() => {
    console.warn('Failed to load MicroFrontendProvider from shared module, using fallback');
    return {
      default: ({ children }: { children?: React.ReactNode }) => <>{children}</>,
    };
  })
);

// Async function to get query client
const getQueryClient = async () => {
  try {
    const { default: sharedQueryClient } = await import('shared/queries/client');
    return sharedQueryClient;
  } catch (error) {
    console.warn('Failed to load shared query client, using fallback:', error);
    return fallbackQueryClient;
  }
};

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

function AppWrapper() {
  const [queryClient, setQueryClient] = React.useState(fallbackQueryClient);

  React.useEffect(() => {
    getQueryClient().then(setQueryClient);
  }, []);

  return (
    <MicrofrontendErrorBoundary fallback={<div>Loading application...</div>}>
      <React.Suspense fallback={<div>Loading styles...</div>}>
        <LazyGlobalStylesProvider>
          <QueryClientProvider client={queryClient}>
            <BrowserRouter>
              <React.Suspense fallback={<div>Loading providers...</div>}>
                <LazyMicroFrontendProvider>
                  <NavigationBridge>
                    <App />
                  </NavigationBridge>
                </LazyMicroFrontendProvider>
              </React.Suspense>
            </BrowserRouter>
          </QueryClientProvider>
        </LazyGlobalStylesProvider>
      </React.Suspense>
    </MicrofrontendErrorBoundary>
  );
}

root.render(<AppWrapper />);
