const fs = require('fs')
const path = require('path')
const webpack = require('webpack')
const client = require('./webpack.client.config')
const server = require('./webpack.server.config')

const isProd = process.env.NODE_ENV === 'production'

const errorLogger = (err, stats) => {
  if (err) console.error(err)
  if (stats.hasErrors()) console.error(stats.toJson().errors)
}

if (isProd) {
  const clientCompiler = webpack(client)
  const serverCompiler = webpack(server)
  clientCompiler.run(errorLogger)
  clientCompiler.hooks.done.tap('plugin', () => {
    serverCompiler.run(errorLogger)
  })
} else {
  webpack(client).watch({}, errorLogger)
  webpack(server).watch({}, errorLogger)
}
