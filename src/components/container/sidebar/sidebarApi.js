import request from '../../../Api'

export default {
  fetchSidebar () {
    return request('sidebar', 'GET')
  }
}
