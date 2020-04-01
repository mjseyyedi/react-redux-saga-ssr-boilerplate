import React from 'react'
import {renderRoutes} from 'react-router-config'
import {StaticRouter, BrowserRouter} from 'react-router-dom'

import Routes from './Routes'

export const ClientRouter = () => (
  <BrowserRouter basename={'/'}>{renderRoutes(Routes)}</BrowserRouter>
)

export const ServerRouter = props => (
  <StaticRouter basename={'/'} {...props}>{renderRoutes(Routes)}</StaticRouter>
)
