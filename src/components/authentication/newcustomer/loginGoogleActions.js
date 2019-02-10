export const LoginGoogleTypes = {
    POST: 'LOGIN_GOOGLE',
    POST_WAITING: 'LOGIN_GOOGLE_WAITING',
    POST_SUCCESS: 'LOGIN_GOOGLE_SUCCESS',
    POST_ERROR: 'LOGIN_GOOGLE_ERROR'
  }
  
  const post = (accessToken,refreshToken) => ({ type: LoginGoogleTypes.POST, request: {accessToken,refreshToken} })
  const postWaiting = () => ({ type: LoginGoogleTypes.POST_WAITING })
  const postSuccess = response => ({ type: LoginGoogleTypes.POST_SUCCESS, response })
  const postError = error => ({ type: LoginGoogleTypes.POST_ERROR, error })
  
  export default {
    post,
    postWaiting,
    postSuccess,
    postError
  }
  