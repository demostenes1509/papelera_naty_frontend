import axios from 'axios'
import { TOKEN_NAME,AUTHORIZATION } from 'components/util/ConstantsUtil'

const client = axios.create({
  baseURL: 'http://localhost:3001/',
  timeout: 3000
})

export default (url, method ) => {

  const token=localStorage.getItem(TOKEN_NAME);
  const headers = {};
  if(token) {
    headers[AUTHORIZATION] = `Bearer ${token}`;
  }

  return client.request({ url, method, headers });
}
