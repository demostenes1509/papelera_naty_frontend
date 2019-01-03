import request from '../../../../Api'

export default {
  fetch (path) {
    return request(path, 'GET')
  }
}
