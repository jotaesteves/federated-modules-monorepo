import { Apps } from './enums';
import { AppsModuleFederationConfig, AppModuleFederationConfig } from './types';

const hostBaseUrl = process.env.HOST_BASE_URL || '/';

/**
 * Configuration for port ranges and base ports
 */
const PORT_CONFIG = {
  DEV_BASE_PORT: parseInt(process.env.DEV_BASE_PORT || '3000', 10),
  ANALYZER_BASE_PORT: parseInt(process.env.ANALYZER_BASE_PORT || '4000', 10),
} as const;

/**
 * Gets port from environment variable with fallback to calculated port
 */
const getPortFromEnv = (
  appName: string,
  type: 'dev' | 'analyzer',
  fallbackPort: number
): number => {
  const envVar = `${appName.toUpperCase()}_${type.toUpperCase()}_PORT`;
  const envValue = process.env[envVar];

  if (envValue) {
    const parsedPort = parseInt(envValue, 10);
    if (!isNaN(parsedPort) && parsedPort > 0) {
      return parsedPort;
    }
  }

  return fallbackPort;
};

/**
 * Generates port mappings for all apps with auto-incrementing ports and environment variable fallbacks
 */
const generatePortMappings = () => {
  const portMappings: Record<Apps, { devPort: number; analyzerPort: number }> = {} as any;

  // Get numeric enum values (the actual enum keys we use)
  const appEntries = Object.values(Apps).filter((value) => typeof value === 'number') as Apps[];

  appEntries.forEach((enumValue, index) => {
    // Get the string name of the enum
    const appName = Apps[enumValue];
    const calculatedDevPort = PORT_CONFIG.DEV_BASE_PORT + index;
    const calculatedAnalyzerPort = PORT_CONFIG.ANALYZER_BASE_PORT + index;

    portMappings[enumValue] = {
      devPort: getPortFromEnv(appName, 'dev', calculatedDevPort),
      analyzerPort: getPortFromEnv(appName, 'analyzer', calculatedAnalyzerPort),
    };
  });

  return portMappings;
};

/**
 * Generated port mappings for all applications
 */
const mapPorts = generatePortMappings();

/**
 * Utility function to log current port configuration (useful for debugging)
 */
export const logPortConfiguration = () => {
  console.log('🚀 Port Configuration:');
  Object.entries(mapPorts).forEach(([app, config]) => {
    console.log(`   ${app}: dev=${config.devPort}, analyzer=${config.analyzerPort}`);
  });
};

/**
 * Export port mappings for external use
 */
export const getPortMappings = () => mapPorts;

const appsModuleFederationConfig: AppsModuleFederationConfig = {
  [Apps.main]: {
    devPort: mapPorts[Apps.main].devPort,
    analyzerPort: mapPorts[Apps.main].analyzerPort,
    baseConfig: {
      name: 'main',
      filename: 'remoteEntry.js',
    },
    remotes: {
      dev: {
        shared: `shared@http://localhost:${mapPorts[Apps.shared].devPort}/remoteEntry.js`,
        header: `header@http://localhost:${mapPorts[Apps.header].devPort}/remoteEntry.js`,
        footer: `footer@http://localhost:${mapPorts[Apps.footer].devPort}/remoteEntry.js`,
        vision360: `vision360@http://localhost:${mapPorts[Apps.vision360].devPort}/remoteEntry.js`,
        personalData: `personalData@http://localhost:${mapPorts[Apps.personalData].devPort}/remoteEntry.js`,
        assetsProducts: `assetsProducts@http://localhost:${mapPorts[Apps.assetsProducts].devPort}/remoteEntry.js`,
        channelsAndServices: `channelsAndServices@http://localhost:${mapPorts[Apps.channelsAndServices].devPort}/remoteEntry.js`,
      },
      prod: {
        shared: `shared@${hostBaseUrl}packages/shared/dist/remoteEntry.js`,
        header: `header@${hostBaseUrl}apps/header/dist/remoteEntry.js`,
        footer: `footer@${hostBaseUrl}apps/footer/dist/remoteEntry.js`,
        vision360: `vision360@${hostBaseUrl}apps/vision360/dist/remoteEntry.js`,
        personalData: `personalData@${hostBaseUrl}apps/personalData/dist/remoteEntry.js`,
        assetsProducts: `assetsProducts@${hostBaseUrl}apps/assetsProducts/dist/remoteEntry.js`,
        channelsAndServices: `channelsAndServices@${hostBaseUrl}apps/channelsAndServices/dist/remoteEntry.js`,
        historyInteractions: `historyInteractions@${hostBaseUrl}apps/historyInteractions/dist/remoteEntry.js`,
      },
    },
  },
  [Apps.shared]: {
    devPort: mapPorts[Apps.shared].devPort,
    analyzerPort: mapPorts[Apps.shared].analyzerPort,
    baseConfig: {
      name: 'shared',
      filename: 'remoteEntry.js',
      exposes: {
        './components/Button': './src/components/Button/Button',
        './components/InputWithLabel': './src/components/InputWithLabel/InputWithLabel',
        './components/SomeForm': './src/components/SomeForm/SomeForm',
        './components/Card': './src/components/Card/Card',
        './components/CardAccordion': './src/components/Card/CardAccordion',
        './components/CardTabs': './src/components/Card/CardTabs',
        './components/CardItemLabel': './src/components/CardItem/CardItemLabel',
        './components/CSSShowcase': './src/components/CSSShowcase/CSSShowcase',
        './components/Spinner': './src/components/Spinner/Spinner',
        './components/Icon': './src/components/Icon/Icon',
        './components/LineBreak': './src/components/LineBreak/LineBreak',
        './components/ErrorBoundary': './src/components/ErrorBoundary/ErrorBoundary',
        './components/app-sidebar': './src/components/app-sidebar',
        './components/ui': './src/components/ui',
        './styles/Global': './src/styles/GlobalStyles',
        './styles/global-import': './src/styles/global-import',
        './utils/transformations': './src/utils/transformations/transformations',
        './utils/api': './src/utils/api/api',
        './queries/client': './src/queries/client',
        './queries/useFilms': './src/queries/useFilms',
        './stores/count': './src/stores/count',
        './stores/globalStore': './src/stores/globalStore',
        './providers/MicroFrontendProvider': './src/providers/MicroFrontendProvider',
        './hooks/useMicroFrontend': './src/hooks/useMicroFrontend',
        './shared/eventBus': './src/shared/eventBus',
        './lib/utils': './src/lib/utils',
        './assets/icons': './src/assets/icons',
      },
    },
  },
  [Apps.header]: {
    devPort: mapPorts[Apps.header].devPort,
    analyzerPort: mapPorts[Apps.header].analyzerPort,
    baseConfig: {
      name: 'header',
      filename: 'remoteEntry.js',
      exposes: {
        './Header': './src/Header',
        './Sidebar': './src/Sidebar',
      },
    },
    remotes: {
      dev: {
        shared: `shared@http://localhost:${mapPorts[Apps.shared].devPort}/remoteEntry.js`,
      },
      prod: {
        shared: `shared@${hostBaseUrl}packages/shared/dist/remoteEntry.js`,
      },
    },
  },
  [Apps.footer]: {
    devPort: mapPorts[Apps.footer].devPort,
    analyzerPort: mapPorts[Apps.footer].analyzerPort,
    baseConfig: {
      name: 'footer',
      filename: 'remoteEntry.js',
      exposes: {
        './Footer': './src/Footer',
      },
    },
    remotes: {
      dev: {
        shared: `shared@http://localhost:${mapPorts[Apps.shared].devPort}/remoteEntry.js`,
      },
      prod: {
        shared: `shared@${hostBaseUrl}packages/shared/dist/remoteEntry.js`,
      },
    },
  },
  [Apps['vision360']]: {
    devPort: mapPorts[Apps.vision360].devPort,
    analyzerPort: mapPorts[Apps.vision360].analyzerPort,
    baseConfig: {
      name: 'vision360',
      filename: 'remoteEntry.js',
      exposes: {
        './Vision360': './src/Vision360',
      },
    },
    remotes: {
      dev: {
        shared: `shared@http://localhost:${mapPorts[Apps.shared].devPort}/remoteEntry.js`,
      },
      prod: {
        shared: `shared@${hostBaseUrl}packages/shared/dist/remoteEntry.js`,
      },
    },
  },
  [Apps.personalData]: {
    devPort: mapPorts[Apps.personalData].devPort,
    analyzerPort: mapPorts[Apps.personalData].analyzerPort,
    baseConfig: {
      name: 'personalData',
      filename: 'remoteEntry.js',
      exposes: {
        './PersonalData': './src/PersonalData',
      },
    },
    remotes: {
      dev: {
        shared: `shared@http://localhost:${mapPorts[Apps.shared].devPort}/remoteEntry.js`,
      },
      prod: {
        shared: `shared@${hostBaseUrl}packages/shared/dist/remoteEntry.js`,
      },
    },
  },
  [Apps.assetsProducts]: {
    devPort: mapPorts[Apps.assetsProducts].devPort,
    analyzerPort: mapPorts[Apps.assetsProducts].analyzerPort,
    baseConfig: {
      name: 'assetsProducts',
      filename: 'remoteEntry.js',
      exposes: {
        './AssetsProducts': './src/AssetsProducts',
      },
    },
    remotes: {
      dev: {
        shared: `shared@http://localhost:${mapPorts[Apps.shared].devPort}/remoteEntry.js`,
      },
      prod: {
        shared: `shared@${hostBaseUrl}packages/shared/dist/remoteEntry.js`,
      },
    },
  },
  [Apps.channelsAndServices]: {
    devPort: mapPorts[Apps.channelsAndServices].devPort,
    analyzerPort: mapPorts[Apps.channelsAndServices].analyzerPort,
    baseConfig: {
      name: 'channelsAndServices',
      filename: 'remoteEntry.js',
      exposes: {
        './ChannelsAndServices': './src/ChannelsAndServices',
      },
    },
    remotes: {
      dev: {
        shared: `shared@http://localhost:${mapPorts[Apps.shared].devPort}/remoteEntry.js`,
      },
      prod: {
        shared: `shared@${hostBaseUrl}packages/shared/dist/remoteEntry.js`,
      },
    },
  },
  [Apps.historyInteractions]: {
    devPort: mapPorts[Apps.historyInteractions].devPort,
    analyzerPort: mapPorts[Apps.historyInteractions].analyzerPort,
    baseConfig: {
      name: 'historyInteractions',
      filename: 'remoteEntry.js',
      exposes: {
        './HistoryInteractions': './src/HistoryInteractions',
      },
    },
    remotes: {
      dev: {
        shared: `shared@http://localhost:${mapPorts[Apps.shared].devPort}/remoteEntry.js`,
      },
      prod: {
        shared: `shared@${hostBaseUrl}packages/shared/dist/remoteEntry.js`,
      },
    },
  },
};

export const getAppModuleFederationConfig = (appName: Apps): AppModuleFederationConfig =>
  appsModuleFederationConfig[appName];

export const getDtsModuleConfig = (appName: Apps) => ({
  test: /\.tsx?$/,
  exclude: /node_modules/,
  use: [
    {
      loader: 'dts-loader',
      options: {
        name: getAppModuleFederationConfig(appName).baseConfig.name,
        exposes: getAppModuleFederationConfig(appName).baseConfig.exposes,
        typesOutputDir: '.wp_federation',
      },
    },
  ],
});
