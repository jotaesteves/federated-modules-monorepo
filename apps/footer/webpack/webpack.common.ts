import { Apps } from '@config/webpack-config/enums';
import {
  getAppModuleFederationConfig,
  getDtsModuleConfig,
} from '@config/webpack-config/module-federation';
import { getSharedModulesConfig } from '@config/webpack-config/utils';

import type { CommonModuleFederationConfig } from '@config/webpack-config/types';
import type * as webpack from 'webpack';
// Use require to avoid JSON module complaints in some tooling contexts

const { dependencies } = require('../package.json');

export const getCommonModuleFederationConfig = (): CommonModuleFederationConfig => ({
  ...getAppModuleFederationConfig(Apps.footer).baseConfig,
  shared: getSharedModulesConfig(dependencies),
});

const getCommonConfig = (): webpack.Configuration => ({
  module: {
    rules: [getDtsModuleConfig(Apps.footer)],
  },
});

export default getCommonConfig;
