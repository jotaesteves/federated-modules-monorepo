import type * as webpack from 'webpack';
import { getSharedModulesConfig } from '@config/webpack-config/utils';
import type { CommonModuleFederationConfig } from '@config/webpack-config/types';
import { Apps } from '@config/webpack-config/enums';
import { getAppModuleFederationConfig } from '@config/webpack-config/module-federation';
import CopyPlugin from 'copy-webpack-plugin';
import { dependencies } from '../package.json';

export const getCommonModuleFederationConfig = (): CommonModuleFederationConfig => ({
  ...getAppModuleFederationConfig(Apps.main).baseConfig,
  shared: getSharedModulesConfig(dependencies, true), // true for host app
});

const getCommonConfig = (): webpack.Configuration => ({
  plugins: [
    new CopyPlugin({
      patterns: [{ from: './public/manifest.json', to: './manifest.json' }],
    }),
  ],
});

export default getCommonConfig;
