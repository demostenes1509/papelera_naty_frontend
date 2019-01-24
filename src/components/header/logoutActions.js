export const LogoutTypes = {
	POST: 'LOGOUT',
	POST_WAITING: 'LOGOUT_WAITING',
	POST_SUCCESS: 'LOGOUT_SUCCESS',
	POST_ERROR: 'LOGOUT_ERROR'
}

const post = () => ({ type: LogoutTypes.POST, request: {} })
const postWaiting = () => ({ type: LogoutTypes.POST_WAITING })
const postSuccess = response => ({ type: LogoutTypes.POST_SUCCESS, response })
const postError = error => ({ type: LogoutTypes.POST_ERROR, error })

export default {
	post,
	postWaiting,
	postSuccess,
	postError
}
