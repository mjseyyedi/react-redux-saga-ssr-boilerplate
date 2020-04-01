const withPrefix = action => `GLOBAL/${action}`

export default {
  SET_PAGE_TITLE: withPrefix('REDUCER/SET_PAGE_TITLE'),
  SET_ROUTER_MATCH: withPrefix('REDUCER/SET_ROUTER_MATCH'),
}
