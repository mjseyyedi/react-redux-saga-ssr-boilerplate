import storeFactory from './store'
import initialState from './state'

export default () => storeFactory(initialState)
