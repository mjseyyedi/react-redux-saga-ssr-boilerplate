import React from 'react'
import {hydrate} from 'react-dom'
import {Provider} from 'react-redux'
import {loadableReady} from '@loadable/component'

import getStore from 'Redux'
import {ClientRouter} from './router'

const MOUNT_NODE = document.getElementById('app')
const store = getStore()
console.log('***************', store)
window.addEventListener('load', async () =>
  loadableReady(async () => {
    await Promise.all(polyfillPackages())
    hydrate(
      <Provider store={store}>
        <ClientRouter />
      </Provider>,
      MOUNT_NODE,
    )
  }),
)

const polyfillPackages = () => {
  let packages = []
  if (!(window.Intl && window.Intl.PluralRules)) {
    packages.push(import('intl-pluralrules'))
  }
  if (!window.URLSearchParams) {
    packages.push(import('url-search-params-polyfill'))
  }
  return packages
}
