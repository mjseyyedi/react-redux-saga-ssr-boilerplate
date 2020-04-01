import axios from 'axios'
import cookies from 'js-cookie'
import querystring from 'querystring'

import APIConfig from './APIConfig'

axios.defaults.withCredentials = true

const axiosConfig = {
  baseURL: APIConfig.hostname,
  timeout: APIConfig.timeout,
  validateStatus: APIConfig.validateStatus,
  maxRedirects: 0,
  transformRequest: [data => querystring.stringify(data)],
}

let instance = axios.create(axiosConfig)

const request = async (reqUrl, method, params, data, headers, options) => {
  let url = reqUrl
  if (url.indexOf('restaurant/coupons') > -1 && params.vendorCode) {
    url += '/' + params.vendorCode
    params = ''
  }
  if (url.indexOf('/landing/pendingForOrdersNew') > -1 && params.orderCode) {
    url += params.orderCode
    params = ''
  }
  let locale = cookies.get('locale')
  data && (data.local = locale)
  if (!params) {
    params = {}
  }

  params.local = locale
  params.client = WEB_ENV
  params.optionalClient = WEB_ENV
  params.appVersion = APP_VERSION
  params.optionalVersion = APP_VERSION
  return await instance
    .request({
      url,
      method,
      params,
      data,
      headers,
      ...options,
    })
    .catch(error =>
      error.response ? error.response.data : {status: false, error},
    )
}

const API = {}

APIConfig.endpoints.forEach(endpoint => {
  API[endpoint.key] = (params, body) => {
    return request(
      endpoint.url,
      endpoint.method,
      params,
      body,
      endpoint.headers || APIConfig.headers,
      endpoint.options,
    )
  }
})

export const setCookie = cookie => {
  instance.defaults.headers.Cookie =
    'PHPSESSID=0e2ab27ea3240609914d7ca0b59e1c1d;'
  //cookie
}
export const removeCookie = () => {
  delete instance.defaults.headers.Cookie
}

export default API
