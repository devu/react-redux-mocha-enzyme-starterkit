let store

export const getStore = () => {
  return store
}
export const setStore = aStore => {
  store = aStore
}

export const dispatch = data => {
  store.dispatch(data)
}

export const getState = (keys = []) => {
  const state = store.getState()
  return getProp(state, keys, state)
}

const getProp = (object, keys, defaultVal) => {
  keys = Array.isArray(keys) ? keys : keys.split('.')
  object = object[keys[0]]
  if (object && keys.length > 1) {
    return getProp(object, keys.slice(1))
  }
  return object === undefined ? defaultVal : object
}
