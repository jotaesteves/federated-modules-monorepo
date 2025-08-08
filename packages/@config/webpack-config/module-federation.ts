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
        // Keep legacy alias for backwards compatibility
        app1: 'app1@http://localhost:3002/remoteEntry.js',
        // New correct alias matching the app folder/name
        vision360: 'vision360@http://localhost:3002/remoteEntry.js',
        app2: 'app2@http://localhost:3003/remoteEntry.js',
        header: 'header@http://localhost:3004/remoteEntry.js',
        footer: 'footer@http://localhost:3005/remoteEntry.js',
      },
      prod: {
        shared: `shared@${hostBaseUrl}packages/shared/dist/remoteEntry.js`,
        // Keep legacy alias for backwards compatibility
        app1: `app1@${hostBaseUrl}apps/app1/dist/remoteEntry.js`,
        // New correct alias matching the app folder/name
        vision360: `vision360@${hostBaseUrl}apps/vision360/dist/remoteEntry.js`,
        app2: `app2@${hostBaseUrl}apps/app2/dist/remoteEntry.js`,
        header: `header@${hostBaseUrl}apps/header/dist/remoteEntry.js`,
        footer: `footer@${hostBaseUrl}apps/footer/dist/remoteEntry.js`,
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
        './components/MemeImage': './src/components/MemeImage/MemeImage',
        './components/SomeForm': './src/components/SomeForm/SomeForm',
        './components/Card': './src/components/Card/Card',
        './components/CSSShowcase': './src/components/CSSShowcase/CSSShowcase',
        './styles/Global': './src/styles/GlobalStyles',
        './styles/globals-import': './src/styles/globals-import',
        './utils/transformations': './src/utils/transformations/transformations',
        './utils/api': './src/utils/api/api',
        './queries/client': './src/queries/client',
        './queries/useFilms': './src/queries/useFilms',
        './stores/count': './src/stores/count',
        './stores/globalStore': './src/stores/globalStore',
        './providers/MicroFrontendProvider': './src/providers/MicroFrontendProvider',
        './hooks/useMicroFrontend': './src/hooks/useMicroFrontend',
        './shared/eventBus': './src/shared/eventBus',
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
  [Apps.app2]: {
    devPort: 3003,
    analyzerPort: 4003,
    baseConfig: {
      name: 'app2',
      filename: 'remoteEntry.js',
      exposes: {
        './App2': './src/App2',
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
