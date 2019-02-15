import axios from 'axios'
import { API_URL, TIMEOUT } from 'config'

const client = axios.create({
  baseURL: API_URL,
  timeout: TIMEOUT
})

export default (url, method, data ) => {
  return client.request({ url, method, headers:{}, data });
}
