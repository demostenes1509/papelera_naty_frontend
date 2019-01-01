export const SidebarTypes = {
    FETCH: 'FETCH_SIDEBAR',
    FETCH_LOADING: 'FETCH_SIDEBAR_LOADING',
    FETCH_SUCCESS: 'FETCH_SIDEBAR_SUCCESS',
  }
  
  const fetch = () => ({ type: SidebarTypes.FETCH })
  const fetchLoading = () => ({ type: SidebarTypes.FETCH_LOADING })
  const fetchSuccess = payload => ({ type: SidebarTypes.FETCH_SUCCESS, payload })
  
  export default {
    fetch,
    fetchLoading,
    fetchSuccess
  }
  