export const loadState = (initialState, subStateKey = '') => {
  let localState = getLocalState()
  if (subStateKey) {
    localState = localState[subStateKey] || {}
    return merge(localState, initialState)
  }
  return localState
  // return mergeAndRemoveRedundant(localState, initialState)
}
export const saveState = newState => {
  try {
    let localState = JSON.parse(localStorage.state || '{}')
    const state = merge(newState, localState)
    const config = {time: new Date().getTime(), version: APP_VERSION}
    localStorage.state = JSON.stringify(state)
    localStorage.config = JSON.stringify(config)
  } catch {
    new Error('Can not save state in localStorage!')
  }
}

export const merge = (first, second) => {
  Object.keys(second).map(key => {
    if (!(key in first)) first[key] = second[key]
  })
  return first
}

const mergeAndRemoveRedundant = (first, second) => {
  Object.keys(first).map(key => {
    if (key in second) second[key] = first[key]
  })
  return second
}

const getLocalState = () => {
  if (typeof localStorage !== 'undefined') {
    try {
      const {time, version} = JSON.parse(localStorage.config || '{}')
      const now = new Date().getTime()
      if (now - time > 60 * 60 * 1000 || version !== APP_VERSION) {
        delete localStorage.state
        delete localStorage.config
      }
      const localStorageState = JSON.parse(localStorage.state || '{}')
      const serverState = getServerState()
      return merge(serverState, localStorageState)
    } catch {
      new Error('Can not read state from localStorage!')
    }
  }
  return {}
}

const getServerState = () => {
  if (window.__STATE__) {
    const state = window.__STATE__
    return state
  }
  return {}
}

