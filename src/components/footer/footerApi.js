import request from '../../Api'

export default {
  fetch () {
    return request('footer', 'GET')
  }
}
