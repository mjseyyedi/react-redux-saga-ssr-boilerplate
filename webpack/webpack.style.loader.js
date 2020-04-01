const MiniCssExtractPlugin = require('mini-css-extract-plugin')

function cssLoader(options) {
  if (options) {
    return {
      loader: 'css-loader',
      options: options,
    }
  } else {
    return 'css-loader'
  }
}
module.exports = function(cssLoaderOptions) {
  return [
    MiniCssExtractPlugin.loader,
    cssLoader(cssLoaderOptions),
    {
      loader: 'postcss-loader',
      options: {
        plugins: [require('autoprefixer')],
      },
    },
    'sass-loader',
  ]
}
