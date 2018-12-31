export const FooterTypes = {
    FETCH_FOOTER: 'FETCH_FOOTER',
    FETCH_FOOTER_LOADING: 'FETCH_FOOTER_LOADING',
    FETCH_FOOTER_SUCCESS: 'FETCH_FOOTER_SUCCESS',
  }
  
  const fetchFooter = () => ({ type: FooterTypes.FETCH_FOOTER })
  const fetchFooterLoading = () => ({ type: FooterTypes.FETCH_FOOTER_LOADING })
  const fetchFooterSuccess = payload => ({ type: FooterTypes.FETCH_FOOTER_SUCCESS, payload })
  
  export default {
    fetchFooter,
    fetchFooterLoading,
    fetchFooterSuccess
  }
  