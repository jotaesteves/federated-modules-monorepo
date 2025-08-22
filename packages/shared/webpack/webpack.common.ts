import { Apps } from '@config/webpack-config/enums';
import { getAppModuleFederationConfig } from '@config/webpack-config/module-federation';
import { getSharedModulesConfig } from '@config/webpack-config/utils';
import * as webpack from 'webpack';

import { dependencies } from '../package.json';

import type { CompleteModuleFederationConfig } from '@config/webpack-config/types';

const getCommonConfig = (): webpack.Configuration => ({
  plugins: [
    new webpack.container.ModuleFederationPlugin({
      ...getAppModuleFederationConfig(Apps.shared).baseConfig,
      shared: getSharedModulesConfig(dependencies, false), // false for remote
    } as CompleteModuleFederationConfig),
  ],
});

export default getCommonConfig;
