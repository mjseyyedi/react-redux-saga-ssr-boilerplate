import {createStore} from 'redux'
import {applyMiddleware} from 'redux'
import createSagaMiddleware from 'redux-saga'

import subscribe from './subscribe'
import staticSagas from './staticSagas'
import {loadState} from './localStorage'
import composeEnhancers from './enhancer'
import staticReducers from './staticReducers'
import sagaManagerFactory from './sagaManagerFactory'
import reducerManagerFactory from './reducerManagerFactory'

export default initialState => {
  const sagaMiddleware = createSagaMiddleware()
  const sagaManager = sagaManagerFactory(sagaMiddleware, staticSagas)
  const reducerManager = reducerManagerFactory(staticReducers)

  const middlewares = [sagaMiddleware /*, loggerMiddleware*/]

  const enhancer = composeEnhancers(applyMiddleware(...middlewares))

  const persistedState = loadState(initialState)

  const store = createStore(reducerManager.reduce, persistedState, enhancer)

  store.reducerManager = reducerManager

  store.sagaManager = sagaManager
  store.sagaManager.run()

  if (typeof window !== 'undefined') {
    subscribe(store)
  }

  return store
}
