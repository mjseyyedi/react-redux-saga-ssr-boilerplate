import C from './constants'
import {combineReducers} from 'redux'
import initialState from './state'

const homeData = (state = initialState.homeData, action) =>
  action.type === C.SET_HOME_DATA ? action.result : state

export default combineReducers({
  homeData,
})
