import request from 'components/util/ApiUtil'

export default {
  fetch (socketId) {
		return request(`token/${socketId}`, 'GET')
  }
}
