import axios from 'axios';

const client = axios.create({
  baseURL: 'http://localhost:3001/',
  timeout: 3000
})

export default (url, method ) => client.request({ url, method })
