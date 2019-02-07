export const LoginFacebookTypes = {
    POST: 'LOGIN_FACEBOOK',
    POST_WAITING: 'LOGIN_FACEBOOK_WAITING',
    POST_SUCCESS: 'LOGIN_FACEBOOK_SUCCESS',
    POST_ERROR: 'LOGIN_FACEBOOK_ERROR'
  }
  
  const post = (accessToken,signedRequest) => ({ type: LoginFacebookTypes.POST, request: {accessToken,signedRequest} })
  const postWaiting = () => ({ type: LoginFacebookTypes.POST_WAITING })
  const postSuccess = response => ({ type: LoginFacebookTypes.POST_SUCCESS, response })
  const postError = error => ({ type: LoginFacebookTypes.POST_ERROR, error })
  
  export default {
    post,
    postWaiting,
    postSuccess,
    postError
  }
  