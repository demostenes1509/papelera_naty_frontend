import request from '../../../Api'

export default {
  fetch () {
    return request('sidebar', 'GET')
  }
}
