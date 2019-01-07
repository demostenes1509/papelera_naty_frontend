export const SidebarTypes = {
    FETCH: 'FETCH_SIDEBAR',
    FETCH_LOADING: 'FETCH_SIDEBAR_LOADING',
    FETCH_SUCCESS: 'FETCH_SIDEBAR_SUCCESS',
    FETCH_ERROR: 'FETCH_SIDEBAR_ERROR'
  }
  
  const fetch = () => ({ type: SidebarTypes.FETCH })
  const fetchLoading = () => ({ type: SidebarTypes.FETCH_LOADING })
  const fetchSuccess = payload => ({ type: SidebarTypes.FETCH_SUCCESS, payload })
  const fetchError = error => ({ type: SidebarTypes.FETCH_ERROR, error })
  
  export default {
    fetch,
    fetchLoading,
    fetchSuccess,
    fetchError
  }
  