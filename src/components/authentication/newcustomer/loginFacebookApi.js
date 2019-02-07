import request from 'components/util/ApiUtil'

export default {
  post (data) {
    return request('login-facebook', 'POST', data)
  }
}
