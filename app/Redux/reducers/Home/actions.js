import {makeActionCreator} from '../helpers'
import C from './constants'

export const setHomeData = makeActionCreator(
  C.SET_HOME_DATA,
  'result',
)
