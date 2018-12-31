import request from '../../Api'

export default {
  fetchFooter () {
    return request('footer', 'GET')
  }
}
