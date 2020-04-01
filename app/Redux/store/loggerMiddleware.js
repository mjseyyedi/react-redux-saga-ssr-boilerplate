export default store => next => action => {
  let result

  if (typeof window !== 'undefined') {
    console.groupCollapsed(action.type)
    console.log('new payload', action)
  } else {
    console.log('\x1b[104m%s\x1b[0m', action.type)
  }

  result = next(action)

  if (typeof window !== 'undefined') {
    console.log('new state', store.getState())
    console.groupEnd()
  }

  return result
}
