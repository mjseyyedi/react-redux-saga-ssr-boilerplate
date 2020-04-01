import React from 'react'

import Layout from './Layout'

const ConnectedLayout = ({route, ...props}) => {
  return <Layout route={route} {...props} />
}

export default ConnectedLayout
