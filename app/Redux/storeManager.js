export const injector = (store, reducers, sagas) => {
  if (reducers) store.reducerManager.add(reducers)
  if (sagas) store.sagaManager.add(sagas)

  const combinedReducer = store.reducerManager.getCombinedReducer()
  store.replaceReducer(combinedReducer)
}

export const ejector = (store, reducers, sagas) => {
  if (reducers) store.reducerManager.remove(reducers)
  if (sagas) store.sagaManager.remove(sagas)
}
