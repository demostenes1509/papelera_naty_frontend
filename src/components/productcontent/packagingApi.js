import request from 'components/util/ApiUtil'

export default {
  fetch () {
    return request('packaging', 'GET')
  }
}
