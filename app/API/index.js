import axios from 'axios'
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

const request = async (url, method, params, data, headers, options) => {
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


export default API
