import request from 'components/util/ApiUtil'

export default {
  post (data) {
    return request('auth/local', 'POST', data)
  }
}
