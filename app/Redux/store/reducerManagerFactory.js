import {combineReducers} from 'redux'

export default staticReducers => {
  const reducers = {
    ...staticReducers,
  }

  let combinedReducer = combineReducers(reducers)

  let keysToRemove = []

  return {
    getReducerMap: () => reducers,

    getCombinedReducer: () => combinedReducer,

    reduce: (state, action) => {
      if (keysToRemove.length > 0) {
        state = {...state}
        for (let key of keysToRemove) {
          delete state[key]
        }
        keysToRemove = []
      }
      return combinedReducer(state, action)
    },

    add: newReducers => {
      Object.keys(newReducers).map(key => {
        if (reducers[key]) {
          return
        }
        reducers[key] = newReducers[key]
        combinedReducer = combineReducers(reducers)
      })
    },

    remove: deprecated => {
      deprecated.map(key => {
        if (!reducers[key]) {
          return
        }
        delete reducers[key]
        keysToRemove.push(key)
        combinedReducer = combineReducers(reducers)
      })
    },
  }
}
