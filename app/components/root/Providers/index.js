import React, {useEffect, useState} from 'react'
import {useLocation} from 'react-router-dom'
import {renderRoutes} from 'react-router-config'
import {useSelector, useDispatch} from 'react-redux'

import 'components/theme'
import {getBranch} from 'router/Routes'
import {setRouterMatch} from 'Redux/reducers/global/actions'
import Context, {states} from '../Context'

const Providers = ({route}) => {
  const dispatch = useDispatch()
  const location = useLocation()
  const match = getBranch(location.pathname).match

  const [contextStates, setCStates] = useState(states)

  useEffect(() => {
    dispatch(setRouterMatch(match))
  }, [location.pathname])

  function setState(key, value) {
    if(key){
      setCStates(state => ({...state, [key] : value}))
    }
  }

  return <Context contextStates={contextStates}>
    {renderRoutes(route.routes, {setState : (key, value) => setState(key, value)})}
  </Context>
}

export default Providers
