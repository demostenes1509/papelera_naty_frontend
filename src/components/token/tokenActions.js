export const TokenTypes = {
    FETCH: 'FETCH_TOKEN',
    FETCH_LOADING: 'FETCH_TOKEN_LOADING',
    FETCH_SUCCESS: 'FETCH_TOKEN_SUCCESS',
    FETCH_ERROR: 'FETCH_TOKEN_ERROR'
  }
  
  const fetch = () => ({ type: TokenTypes.FETCH })
  const fetchLoading = () => ({ type: TokenTypes.FETCH_LOADING })
  const fetchSuccess = payload => ({ type: TokenTypes.FETCH_SUCCESS, payload })
  const fetchError = error => ({ type: TokenTypes.FETCH_ERROR, error })
  
  export default {
    fetch,
    fetchLoading,
    fetchSuccess,
    fetchError
  }
  