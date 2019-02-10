import { UserSessionTypes } from './userSessionActions'

const initialState = {
	socketId: null,
  isLoggedIn: null,
  isAdmin: null,
  firstName: null,
	lastName: null,
	error: null
}

export default (state = initialState, action) => {
	switch(action.type) {
    case UserSessionTypes.NOT_LOGGED_IN:
      return {
				socketId: action.socketId, 
				isLoggedIn: false,
				isAdmin: false,
				firstName: null,
				lastName: null,
				error: null		
      }
		case UserSessionTypes.LOGGED_IN:
      return {
				socketId: action.payload.socketId, 
        isLoggedIn: true,
        isAdmin: action.payload.isAdmin,
        firstName: action.payload.firstName,
				lastName: action.payload.lastName,
				error: null
      }
		case UserSessionTypes.LOGIN_ERROR:
      return {
				socketId: null,
        isLoggedIn: false,
        isAdmin: false,
        firstName: null,
				lastName: null,
				error: action.error
      }
    default:
      return state
  }
}