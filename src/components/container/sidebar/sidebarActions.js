export const SidebarTypes = {
    FETCH_SIDEBAR: 'FETCH_SIDEBAR',
    FETCH_SIDEBAR_LOADING: 'FETCH_SIDEBAR_LOADING',
    FETCH_SIDEBAR_SUCCESS: 'FETCH_SIDEBAR_SUCCESS',
  }
  
  const fetchSidebar = () => ({ type: SidebarTypes.FETCH_SIDEBAR })
  const fetchSidebarLoading = () => ({ type: SidebarTypes.FETCH_SIDEBAR_LOADING })
  const fetchSidebarSuccess = payload => ({ type: SidebarTypes.FETCH_SIDEBAR_SUCCESS, payload })
  
  export default {
    fetchSidebar,
    fetchSidebarLoading,
    fetchSidebarSuccess
  }
  