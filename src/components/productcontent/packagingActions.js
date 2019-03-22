export const PackagingTypes = {
    FETCH: 'FETCH_PACKAGING',
    FETCH_LOADING: 'FETCH_PACKAGING_LOADING',
    FETCH_SUCCESS: 'FETCH_PACKAGING_SUCCESS',
    FETCH_ERROR: 'FETCH_PACKAGING_ERROR'
  }
  
  const fetch = () => ({ type: PackagingTypes.FETCH })
  const fetchLoading = () => ({ type: PackagingTypes.FETCH_LOADING })
  const fetchSuccess = payload => ({ type: PackagingTypes.FETCH_SUCCESS, payload })
  const fetchError = error => ({ type: PackagingTypes.FETCH_ERROR, error })
  
  export default {
    fetch,
    fetchLoading,
    fetchSuccess,
    fetchError
  }
  