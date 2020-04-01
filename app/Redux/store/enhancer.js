import {compose} from 'redux'

export default NODE_ENV === 'development' &&
typeof window !== 'undefined' &&
window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      shouldHotReload: false,
      /*autoPause: true,*/
      maxAge: 10000,
    })
  : compose
