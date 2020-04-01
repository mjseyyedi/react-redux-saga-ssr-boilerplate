require('full-icu')
import path from 'path'
import express from 'express'
import compression from 'compression'
import cookieParser from 'cookie-parser'
import expressStaticGzip from 'express-static-gzip'

import getStore from 'Redux'
import render from './render'
import {configAxiosInstance, routeParser} from './middlewares'

const PORT = process.env.PORT || 3001

const app = express()

const publicPath = path.resolve(process.cwd(), './dist')

const shouldCompress = (req, res) =>
  req.headers['x-no-compression'] ? false : compression.filter(req, res)

app.use(routeParser)
app.use(cookieParser())
app.use(configAxiosInstance)
app.use(compression({filter: shouldCompress}))
app.use(expressStaticGzip(publicPath, {enableBrotli: true}))

app.get('*', async (req, res) => {
  const store = getStore()
  const actions = req.router.branch
    .map(({route}) =>
      route.fetching
        ? route.fetching.then
          ? route.fetching.then(result => result.fetching(store, req, res))
          : route.fetching(store, req, res)
        : [],
    )
    .flat()

  await Promise.all(actions)
  await store.sagaManager.execAllTasks(store)

  const context = {}
  const content = render(req.originalUrl, store, context)

  res.send(content)
})

app.listen(PORT, () =>
  console.log(
    '\x1b[105m%s\x1b[0m',
    `✔✔ Frontend service listening on port: ${PORT} ✔✔`,
  ),
)
