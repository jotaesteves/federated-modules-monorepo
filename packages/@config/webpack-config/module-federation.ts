import { Apps } from './enums';
import { AppsModuleFederationConfig, AppModuleFederationConfig } from './types';

const hostBaseUrl = process.env.HOST_BASE_URL || '/';

const appsModuleFederationConfig: AppsModuleFederationConfig = {
  [Apps.main]: {
    devPort: 3000,
    analyzerPort: 4000,
    baseConfig: {
      name: 'main',
      filename: 'remoteEntry.js',
    },
    remotes: {
      dev: {
        shared: 'shared@http://localhost:3001/remoteEntry.js',
        vision360: 'vision360@http://localhost:3002/remoteEntry.js',
        header: 'header@http://localhost:3004/remoteEntry.js',
        footer: 'footer@http://localhost:3005/remoteEntry.js',
        personalData: 'personalData@http://localhost:3006/remoteEntry.js',
        assetsProducts: 'assetsProducts@http://localhost:3007/remoteEntry.js',
        channelsAndServices: 'channelsAndServices@http://localhost:3008/remoteEntry.js',
        historyInteractions: 'historyInteractions@http://localhost:3009/remoteEntry.js',
      },
      prod: {
        shared: `shared@${hostBaseUrl}packages/shared/dist/remoteEntry.js`,
        vision360: `vision360@${hostBaseUrl}apps/vision360/dist/remoteEntry.js`,
        header: `header@${hostBaseUrl}apps/header/dist/remoteEntry.js`,
        footer: `footer@${hostBaseUrl}apps/footer/dist/remoteEntry.js`,
        personalData: `personalData@${hostBaseUrl}apps/personalData/dist/remoteEntry.js`,
        assetsProducts: `assetsProducts@${hostBaseUrl}apps/assetsProducts/dist/remoteEntry.js`,
        channelsAndServices: `channelsAndServices@${hostBaseUrl}apps/channelsAndServices/dist/remoteEntry.js`,
        historyInteractions: `historyInteractions@${hostBaseUrl}apps/historyInteractions/dist/remoteEntry.js`,
      },
    },
  },
  [Apps.shared]: {
    devPort: 3001,
    analyzerPort: 4001,
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
        './components/CSSShowcase': './src/components/CSSShowcase/CSSShowcase',
        './components/Spinner': './src/components/Spinner/Spinner',
        './components/Icon': './src/components/Icon/Icon',
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
  [Apps['vision360']]: {
    devPort: 3002,
    analyzerPort: 4002,
    baseConfig: {
      name: 'vision360',
      filename: 'remoteEntry.js',
      exposes: {
        './Vision360': './src/Vision360',
      },
    },
    remotes: {
      dev: {
        shared: 'shared@http://localhost:3001/remoteEntry.js',
      },
      prod: {
        shared: `shared@${hostBaseUrl}packages/shared/dist/remoteEntry.js`,
      },
    },
  },
  [Apps.header]: {
    devPort: 3004,
    analyzerPort: 4004,
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
        shared: 'shared@http://localhost:3001/remoteEntry.js',
      },
      prod: {
        shared: `shared@${hostBaseUrl}packages/shared/dist/remoteEntry.js`,
      },
    },
  },
  [Apps.footer]: {
    devPort: 3005,
    analyzerPort: 4005,
    baseConfig: {
      name: 'footer',
      filename: 'remoteEntry.js',
      exposes: {
        './Footer': './src/Footer',
      },
    },
    remotes: {
      dev: {
        shared: 'shared@http://localhost:3001/remoteEntry.js',
      },
      prod: {
        shared: `shared@${hostBaseUrl}packages/shared/dist/remoteEntry.js`,
      },
    },
  },
  [Apps.personalData]: {
    devPort: 3006,
    analyzerPort: 4006,
    baseConfig: {
      name: 'personalData',
      filename: 'remoteEntry.js',
      exposes: {
        './PersonalData': './src/PersonalData',
      },
    },
    remotes: {
      dev: {
        shared: 'shared@http://localhost:3001/remoteEntry.js',
      },
      prod: {
        shared: `shared@${hostBaseUrl}packages/shared/dist/remoteEntry.js`,
      },
    },
  },
  [Apps.assetsProducts]: {
    devPort: 3007,
    analyzerPort: 4007,
    baseConfig: {
      name: 'assetsProducts',
      filename: 'remoteEntry.js',
      exposes: {
        './AssetsProducts': './src/AssetsProducts',
      },
    },
    remotes: {
      dev: {
        shared: 'shared@http://localhost:3001/remoteEntry.js',
      },
      prod: {
        shared: `shared@${hostBaseUrl}packages/shared/dist/remoteEntry.js`,
      },
    },
  },
  [Apps.channelsAndServices]: {
    devPort: 3008,
    analyzerPort: 4008,
    baseConfig: {
      name: 'channelsAndServices',
      filename: 'remoteEntry.js',
      exposes: {
        './ChannelsAndServices': './src/ChannelsAndServices',
      },
    },
    remotes: {
      dev: {
        shared: 'shared@http://localhost:3001/remoteEntry.js',
      },
      prod: {
        shared: `shared@${hostBaseUrl}packages/shared/dist/remoteEntry.js`,
      },
    },
  },
  [Apps.historyInteractions]: {
    devPort: 3009,
    analyzerPort: 4009,
    baseConfig: {
      name: 'historyInteractions',
      filename: 'remoteEntry.js',
      exposes: {
        './HistoryInteractions': './src/HistoryInteractions',
      },
    },
    remotes: {
      dev: {
        shared: 'shared@http://localhost:3001/remoteEntry.js',
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
