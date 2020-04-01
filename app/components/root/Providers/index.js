import React, {useEffect} from 'react'
import {useLocation} from 'react-router-dom'
import {renderRoutes} from 'react-router-config'
import {useSelector, useDispatch} from 'react-redux'

import 'components/theme'
import {getBranch} from 'router/Routes'
import {setRouterMatch} from 'Redux/reducers/global/actions'

import styles from './styles'

const Providers = ({route}) => {
  const dispatch = useDispatch()
  const location = useLocation()
  const match = getBranch(location.pathname).match

  useEffect(() => {
    dispatch(setRouterMatch(match))
  }, [location.pathname])

  return renderRoutes(route.routes)
}

export default Providers
