import React from 'react'
import {renderRoutes} from 'react-router-config'

const Layout = props => {
  return renderRoutes(props.route.routes, {...props})
}

export default Layout
