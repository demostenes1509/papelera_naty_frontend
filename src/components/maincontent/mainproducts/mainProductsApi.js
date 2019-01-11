import request from 'components/util/ApiUtil'

export default {
  fetch (path) {
    return request(path, 'GET')
  }
}
