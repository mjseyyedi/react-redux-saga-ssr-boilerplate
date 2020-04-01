import {createSelector} from 'reselect'

const selectGlobal = state =>
  state.global

const selectPageTitle = () =>
  createSelector(
    selectGlobal,
    global =>
      global.pageTitle,
  )

const selectRouterMatch = () =>
  createSelector(
    selectGlobal,
    global =>
      global.routerMatch,
  )

const selectRouterPath = () =>
  createSelector(
    selectGlobal,
    global =>
      global
        .routerMatch
        .path,
  )

const selectRouterUrl = () =>
  createSelector(
    selectGlobal,
    global =>
      global
        .routerMatch
        .url,
  )

export {
  selectPageTitle,
  selectRouterMatch,
  selectRouterPath,
  selectRouterUrl,
}
