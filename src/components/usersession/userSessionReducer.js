import { UserSessionTypes } from './userSessionActions'

const initialState = {
  isLoggedIn: false,
  isAdmin: null,
  firstName: null,
  lastName: null
}

export default (state = initialState, action) => {
	switch(action.type) {
    case UserSessionTypes.NOT_LOGGED_IN:
      return {
				isLoggedIn: false,
				isAdmin: null,
				firstName: null,
				lastName: null				
      }
		case UserSessionTypes.LOGGED_IN:
      return {
        isLoggedIn: true,
        isAdmin: action.payload.isAdmin,
        firstName: action.payload.firstName,
        lastName: action.payload.lastName
      }
    default:
      return state
  }
}