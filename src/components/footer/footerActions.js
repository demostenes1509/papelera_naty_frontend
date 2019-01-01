export const FooterTypes = {
    FETCH: 'FETCH_FOOTER',
    FETCH_LOADING: 'FETCH_FOOTER_LOADING',
    FETCH_SUCCESS: 'FETCH_FOOTER_SUCCESS',
  }
  
  const fetch = () => ({ type: FooterTypes.FETCH })
  const fetchLoading = () => ({ type: FooterTypes.FETCH_LOADING })
  const fetchSuccess = payload => ({ type: FooterTypes.FETCH_SUCCESS, payload })
  
  export default {
    fetch,
    fetchLoading,
    fetchSuccess
  }
  