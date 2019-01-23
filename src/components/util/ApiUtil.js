import axios from 'axios'
import { TOKEN_NAME,AUTHORIZATION } from 'components/util/ConstantsUtil'
import { getToken } from 'components/util/SessionUtil'

const client = axios.create({
  baseURL: 'http://localhost:3001/',
  timeout: 3000
})

export default (url, method, data ) => {

  const token = getToken();
  const headers = {};
  if(token) {
    headers[AUTHORIZATION] = `Bearer ${token}`;
  }

  return client.request({ url, method, headers, data });
}
