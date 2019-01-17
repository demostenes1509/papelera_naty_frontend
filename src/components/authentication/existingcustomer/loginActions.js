export const LoginTypes = {
    POST: 'LOGIN',
    POST_WAITING: 'LOGIN_WAITING',
    POST_SUCCESS: 'LOGIN_SUCCESS',
    POST_ERROR: 'LOGIN_ERROR'
  }
  
  const post = (email,password) => ({ type: LoginTypes.POST, request: {email,password} })
  const postWaiting = () => ({ type: LoginTypes.POST_WAITING })
  const postSuccess = response => ({ type: LoginTypes.POST_SUCCESS, response })
  const postError = error => ({ type: LoginTypes.POST_ERROR, error })
  
  export default {
    post,
    postWaiting,
    postSuccess,
    postError
  }
  