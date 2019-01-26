import { UserSessionTypes } from './userSessionActions'

const initialState = {
  isLoggedIn: false,
  isAdmin: null,
  firstName: null,
	lastName: null,
	error: null
}

export default (state = initialState, action) => {
	switch(action.type) {
    case UserSessionTypes.NOT_LOGGED_IN:
      return {
				isLoggedIn: false,
				isAdmin: null,
				firstName: null,
				lastName: null,
				error: null		
      }
		case UserSessionTypes.LOGGED_IN:
      return {
        isLoggedIn: true,
        isAdmin: action.payload.isAdmin,
        firstName: action.payload.firstName,
				lastName: action.payload.lastName,
				error: null
      }
		case UserSessionTypes.LOGIN_ERROR:
      return {
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