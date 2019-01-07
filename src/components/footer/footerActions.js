export const FooterTypes = {
    FETCH: 'FETCH_FOOTER',
    FETCH_LOADING: 'FETCH_FOOTER_LOADING',
    FETCH_SUCCESS: 'FETCH_FOOTER_SUCCESS',
    FETCH_ERROR: 'FETCH_FOOTER_ERROR'
  }
  
  const fetch = () => ({ type: FooterTypes.FETCH })
  const fetchLoading = () => ({ type: FooterTypes.FETCH_LOADING })
  const fetchSuccess = payload => ({ type: FooterTypes.FETCH_SUCCESS, payload })
  const fetchError = error => ({ type: FooterTypes.FETCH_ERROR, error })
  
  export default {
    fetch,
    fetchLoading,
    fetchSuccess,
    fetchError
  }
  