const withPrefix = action => `HOME/${action}`

export default {
  SET_HOME_DATA: withPrefix('REDUCER/SET_HOME_DATA'),
}
