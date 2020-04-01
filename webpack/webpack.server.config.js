const path = require('path')
const {toHash} = require('./helpers')
const merge = require('webpack-merge')
const WebpackBar = require('webpackbar')
const baseConfig = require('./webpack.base.config')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const webpackNodeExternals = require('webpack-node-externals')

const env = process.env.NODE_ENV === 'production' ? 'production' : 'development'
const isDev = env === 'development'

const config = {
  mode: env,
  target: 'node',
  entry: path.resolve(process.cwd(), './server/index.js'),
  output: {
    path: path.resolve(process.cwd(), './build'),
    filename: 'server.js',
    publicPath: '/',
  },
  node: {
    __dirname: false,
    __filename: false,
  },
  externals: [webpackNodeExternals()],
  module: {
    rules: [
      {
        test: /\.(svg|png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: `/images_${toHash(process.env.APP_VERSION)}/[name].[ext]`,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: [
        path.resolve(process.cwd(), './build/**/*'),
      ],
    }),
  ],
}

if (isDev) {
  config.plugins.push(
    new WebpackBar({
      color: '#61afef',
      name: 'Server',
    }),
  )
}

const babelLoader = baseConfig.module.rules.find(
  config => config.loader === 'babel-loader',
)
babelLoader.options.plugins.push('dynamic-import-node')

module.exports = merge(baseConfig, config)
