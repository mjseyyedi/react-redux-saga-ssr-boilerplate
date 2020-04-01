import {getBranch} from 'router/Routes'
import {setCookie, removeCookie} from 'API'

export const configAxiosInstance = (req, res, next) => {
  setCookie(req.headers.cookie)
  res.on('finish', () => removeCookie())

  next()
}

export const routeParser = (req, _, next) => {
  let router = {branch: [], match: {}}
  if (!req.url.match(/\.\w+$/)) {
    router = getBranch(req.originalUrl)
  }
  req.router = router

  next()
}
