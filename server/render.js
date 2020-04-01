import path from 'path'
import React from 'react'
import {Provider} from 'react-redux'
import {ChunkExtractor} from '@loadable/server'
import {renderToString} from 'react-dom/server'

import html from './template.html'
import {ServerRouter} from 'router'

const statsFile = path.resolve(
  process.cwd(),
  './dist/loadable-stats.json',
)
const extractor = new ChunkExtractor({statsFile, entrypoints: ['app']})

export default (pathname, store, context) => {
  const content = renderToString(
    extractor.collectChunks(
      <Provider store={store}>
        <ServerRouter location={pathname} context={context} />
      </Provider>,
    ),
  )

  const state = store.getState()

  return html(content, extractor, state)
}
