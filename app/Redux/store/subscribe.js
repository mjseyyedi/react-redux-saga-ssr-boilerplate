import throttle from 'lodash/throttle'
import {saveState} from './localStorage'

export default store =>
  store.subscribe(
    throttle(() => {
      const state = store.getState()
      let savableState = {}
      if (state.address) {
        savableState.address = {...state.address}
      }
      if (state.basket) {
        savableState.basket = {
          ...state.basket,
          fetching: false,
        }
      }
      if (state.vendor) {
        savableState.vendor = {
          ...state.vendor,
          fetching: false,
          banks: [],
          pendingOrders: [],
          orderDescription: null,
        }
      }
      if (state.user) {
        savableState.user = {
          ...state.user,
          fetching: false,
          // locationTime: null,
          // homeScreenPage: null,
          // locModalOpen: null,
        }
      }
      if (state.home) {
        savableState.home = {
          ...state.home,
          fetching: false,
        }
      }
      saveState(savableState)
    }, 1000),
  )
