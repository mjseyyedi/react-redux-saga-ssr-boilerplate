const path = require('path')
const {toHash} = require('./helpers')
const merge = require('webpack-merge')
const WebpackBar = require('webpackbar')
const CopyPlugin = require('copy-webpack-plugin')
const baseConfig = require('./webpack.base.config')
const BrotliPlugin = require('brotli-webpack-plugin')
const NodemonPlugin = require('nodemon-webpack-plugin')
const LoadablePlugin = require('@loadable/webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const CompressionPlugin = require('compression-webpack-plugin')
const {BundleAnalyzerPlugin} = require('webpack-bundle-analyzer')

const env = process.env.NODE_ENV === 'production' ? 'production' : 'development'
const isDev = env === 'development'

const config = {
  mode: env,
  entry: {
    app: path.resolve(process.cwd(), './app/index.js'),
  },
  output: {
    path: path.resolve(process.cwd(), './dist'),
    publicPath: '/',
    chunkFilename: isDev ? '[id].js' : '[id].[hash].js',
    filename: isDev ? '[name].bundle.js' : '[name].[hash].bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(svg|png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: `images_${toHash(process.env.APP_VERSION)}/[name].[ext]`,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new LoadablePlugin(),
    new CopyPlugin([
      {
        from: path.resolve(
          process.cwd(),
          './app/assets/images/icon/favicon.ico',
        ),
        to: path.resolve(
          process.cwd(),
          `./dist/images_${toHash(process.env.APP_VERSION)}`,
        ),
      },
    ]),
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: [
        path.resolve(process.cwd(), './dist/**/*'),
      ],
    }),
    // new BundleAnalyzerPlugin()
  ],
}
const babelLoader = baseConfig.module.rules.find(
  config => config.loader === 'babel-loader',
)
babelLoader.options.plugins.push('@babel/plugin-syntax-dynamic-import')

if (isDev) {
  config.plugins.push(
    new WebpackBar({
      color: '#FF1493',
      name: 'Client',
    }),
    new NodemonPlugin({
      quiet: true,
      nodeArgs: ['--inspect'],
      script: path.resolve(process.cwd(), './build/server.js'),
      watch: [
        path.resolve(process.cwd(), './dist/'),
        path.resolve(process.cwd(), './build/'),
      ],
      delay: '1000',
    }),
  )
} else {
  config.plugins.push(
    new CompressionPlugin({
      algorithm: 'gzip',
    }),
    new BrotliPlugin(),
  )
}

module.exports = merge(baseConfig, config)
