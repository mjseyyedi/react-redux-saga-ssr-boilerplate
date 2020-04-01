const path = require('path')
const webpack = require('webpack')
let env = require('dotenv').config().parsed
const styleLoader = require('./webpack.style.loader')
const TerserJSPlugin = require('terser-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')

Object.keys(env).map(key => {
  if (key in process.env) {
    env[key] = JSON.stringify(process.env[key])
  } else {
    env[key] = JSON.stringify(env[key])
  }
})

const isDev = process.env.NODE_ENV === 'development'

const config = {
  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: [
            [
              '@babel/preset-env',
              {
                useBuiltIns: 'usage',
                corejs: 3,
              },
            ],
            '@babel/preset-react',
          ],
          plugins: [
            '@babel/plugin-proposal-class-properties',
            '@loadable/babel-plugin',
            // '@babel/plugin-transform-runtime',
          ],
        },
      },
      {
        test: /\.(sa|sc|c)ss$/,
        oneOf: [
          {
            test: /\.m\.(sa|sc|c)ss$/,
            use: styleLoader({
              importLoaders: 2,
              localsConvention: 'camelCase',
              onlyLocals: false,
              modules: {
                localIdentName: isDev
                  ? '[path][name]__[local]'
                  : '[hash:base64]',
              },
            }),
          },
          {
            use: styleLoader(),
          },
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: isDev ? '[name].css' : '[name].[hash].css',
      chunkFilename: isDev ? '[id].css' : '[id].[hash].css',
      ignoreOrder: false,
    }),
    new webpack.DefinePlugin(env),
  ],
  optimization: {
    minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          chunks: 'all',
        },
      },
    },
  },
  resolve: {
    modules: ['node_modules', 'app'],
    extensions: ['.wasm', '.mjs', '.js', '.json', '.scss', '.m.scss'],
  },
}

module.exports = config
