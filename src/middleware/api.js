import axios from 'axios'
import config from 'config'

const token = localStorage.getItem('token')
const client = axios.create({
  baseURL: config.api_endpoint,
  responseType: 'json'
})

client.defaults.headers.post['Content-Type'] = 'application/json'
if (token) {
  client.defaults.headers.common.authorization = `Bearer ${token}`
}

export default client
