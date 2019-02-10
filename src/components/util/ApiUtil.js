import axios from 'axios'
import { AUTHORIZATION } from 'components/util/ConstantsUtil'
import { getToken } from 'components/util/SessionUtil'
import { API_URL, TIMEOUT } from 'config'

const client = axios.create({
  baseURL: API_URL,
  timeout: TIMEOUT
})

export default (url, method, data ) => {

  const token = getToken();
  const headers = {};
  if(token) {
    headers[AUTHORIZATION] = `Bearer ${token}`;
  }

  return client.request({ url, method, headers, data });
}
