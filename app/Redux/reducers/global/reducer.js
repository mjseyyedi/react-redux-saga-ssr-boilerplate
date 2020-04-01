import C from './constants'
import {combineReducers} from 'redux'
import initialState from './state'

const pageTitle = (state = initialState.pageTitle, action) =>
  action.type === C.SET_PAGE_TITLE ? action.title : state

const routerMatch = (state = initialState.routerMatch, action) =>
  action.type === C.SET_ROUTER_MATCH ? action.match : state

export default combineReducers({
  pageTitle,
  routerMatch,
})
