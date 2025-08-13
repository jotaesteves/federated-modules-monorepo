import { Apps } from '@config/webpack-config/enums';
import {
  getAppModuleFederationConfig,
  getDtsModuleConfig,
} from '@config/webpack-config/module-federation';
import { getSharedModulesConfig } from '@config/webpack-config/utils';

import { dependencies } from '../package.json';

import type { CommonModuleFederationConfig } from '@config/webpack-config/types';
import type * as webpack from 'webpack';

export const getCommonModuleFederationConfig = (): CommonModuleFederationConfig => ({
  ...getAppModuleFederationConfig(Apps.assetsProducts).baseConfig,
  shared: getSharedModulesConfig(dependencies),
});

const getCommonConfig = (): webpack.Configuration => ({
  module: {
    rules: [getDtsModuleConfig(Apps.assetsProducts)],
  },
});

export default getCommonConfig;
