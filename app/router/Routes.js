import loadable from '@loadable/component'
import {matchRoutes} from 'react-router-config'

import {fetching as layoutFetching} from 'components/root/Layout/fetching'
import Layout from 'components/root/Layout'
import Providers from 'components/root/Providers'

const Routes = [
  {
    component: Providers,
    routes: [
      {
        component: Layout,
        fetching: layoutFetching,
        routes: [
          {
            component: loadable(() => import('components/pages/Home')),
            path: '/',
            exact: true,
            fetching: import('components/pages/Home/fetching'),
          },
        ],
      },
    ],
  },
]

export default Routes

export const getBranch = pathname => {
  const branch = matchRoutes(Routes, pathname)
  const branchHead = branch[branch.length - 1]
  branchHead.match.url = pathname
  const route = {branch, match: branchHead.match}
  return route
}
