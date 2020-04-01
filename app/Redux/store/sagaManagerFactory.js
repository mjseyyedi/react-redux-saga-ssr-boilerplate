import {END} from 'redux-saga'

export default (sagaMiddleware, staticSagas) => {
  const sagas = {}

  const stopAllWatchers = dispatch => {
    dispatch(END)
  }

  const manager = {
    getSagaMap: () => sagas,

    add: newSagas => {
      Object.keys(newSagas).map(key => {
        if (sagas[key]) {
          return
        }
        const saga = newSagas[key]
        sagas[key] = {task: sagaMiddleware.run(saga)}
      })
    },

    remove: deprecated => {
      deprecated.map(key => {
        if (!sagas[key]) {
          return
        }
        delete sagas[key]
      })
    },

    run: () => {
      manager.add(staticSagas)
    },

    execAllTasks: async ({dispatch}) => {
      stopAllWatchers(dispatch)
      const keys = Object.keys(sagas)
      for (let i = 0; i < keys.length; i++) {
        const key = keys[i]
        if (sagas[key].task.isRunning()) {
          await sagas[key].task.toPromise()
        }
      }
    },
  }

  return manager
}
