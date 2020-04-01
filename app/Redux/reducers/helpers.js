export const makeActionCreator = (type, ...argNames) => {
  return (...args) => {
    const action = {type}
    argNames.forEach((_, index) => {
      action[argNames[index]] = args[index]
    })
    return action
  }
}

export const normalize = (array, key) => {
  let normalized = {}
  for (let i = 0; i < array.length; i++) {
    const object = array[i]
    normalized[object[key]] = object
    delete object[key]
  }
  return normalized
}

export const removeProperty = (obj, name) => {
  const {[name]: _, ...result} = obj
  return result
}
