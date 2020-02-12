import axios from 'axios'

function formatContentType(contentType, data) {
  const map = {
    'application/x-www-form-urlencoded'(data) {
      return JSON.stringify(data)
    }
  }
  return map[contentType] || map[contentType](data) || data
}

function requester(requestInfo) {
  const { url, config } = requestInfo
  const { path, method, body = {}, headers = {}, query = {} } = url
  let baseURL = ''
  config.baseURL && (baseURL = config.baseURL)
  headers['Content-Type'] = headers['Content-Type'] || 'application/json'
  const req = axios({
    params: query,
    baseURL,
    method,
    url: path,
    data: formatContentType(headers['Content-Type']) || body,
    headers,
    withCredentials: !baseURL
  })
  return req.then(data => data.data)
}

function Service(apiSchemaList, serviceConfig, requester) {}

export const createService = (apiSchemaList, serviceConfig) => {
  return new Service(apiSchemaList, serviceConfig, requester)
}