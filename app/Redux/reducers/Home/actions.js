import {makeActionCreator} from '../helpers'
import C from './constants'

export const setPageTitle = makeActionCreator(
  C.SET_PAGE_TITLE,
  'title',
)
export const setRouterMatch = makeActionCreator(
  C.SET_ROUTER_MATCH,
  'match',
)
