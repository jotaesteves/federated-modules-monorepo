import { Apps } from '@config/webpack-config/enums';
import { getBundleAnalyzerPlugin } from '@config/webpack-config/utils';
import getProdCommonConfig from '@config/webpack-config/webpack.prod';
import { merge } from 'webpack-merge';

import getCommonConfig from './webpack.common';

import type * as webpack from 'webpack';

const getProdConfig = (env: Record<string, string | boolean>): webpack.Configuration =>
  merge(getProdCommonConfig(), getCommonConfig(), {
    plugins: [...(env.analyze ? [getBundleAnalyzerPlugin(Apps.shared)] : [])],
  });

export default getProdConfig;
