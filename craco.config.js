const path = require('path');
const CracoEsbuildPlugin = require('craco-esbuild');
const { ESBuildMinifyPlugin } = require('esbuild-loader');
const SpeedMeasurePlugin = require('speed-measure-webpack-plugin');
const smp = new SpeedMeasurePlugin();

module.exports = {
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'esbuild-loader',
        options: {
          loader: 'tsx',
          target: 'es2015',
          tsconfigRaw: require('./tsconfig.json'),
        },
      },
    ],
  },
  optimization: {
    minimizer: [
      new ESBuildMinifyPlugin({
        target: 'es2015', // Syntax to compile to (see options below for possible values)
      }),
    ],
  },
  plugins: [
    {
      plugin: CracoEsbuildPlugin,
      options: {
        esbuildLoaderOptions: {
          loader: 'tsx',
          target: 'es2015',
        },
        esbuildMinimizerOptions: {
          target: 'es2015',
          css: true,
        },
      },
    },
  ],
  babel: {
    plugins: [
      [
        'babel-plugin-styled-components',
        {
          displayName: true,
        },
      ],
    ],
  },
  webpack: smp.wrap({
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
    output: {
      path: path.join(__dirname, '/src/'),
      filename: '[name].[chunkhash:8].js',
    },
  }),
};
