export const UserSessionTypes = {
    NOT_LOGGED_IN: 'NOT_LOGGED_IN',
		LOGGED_IN: 'LOGGED_IN',
		LOGIN_ERROR: 'LOGIN_ERROR'
  }
  
  const notLoggedIn = (socketId) => ({ type: UserSessionTypes.NOT_LOGGED_IN, socketId })
  const loggedIn = (payload) => ({ type: UserSessionTypes.LOGGED_IN, payload })
  const loginError = (error) => ({ type: UserSessionTypes.LOGIN_ERROR, error })
  
  export default {
    notLoggedIn,
		loggedIn,
		loginError
  }
  