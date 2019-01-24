import request from 'components/util/ApiUtil'

export default {
  post (data) {
    return request('logout', 'POST', data)
  }
}
