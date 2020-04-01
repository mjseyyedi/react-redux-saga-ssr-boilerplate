export default {
  hostname: 'https://temp.host',
  timeout: 10000,
  validateStatus: status => status >= 200 && status < 302,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
  },
  endpoints: [
    {
      key: 'getVendors',
      url: '/mobile/v2/restaurant/vendors-list',
      method: 'GET',
    }
  ]
}
