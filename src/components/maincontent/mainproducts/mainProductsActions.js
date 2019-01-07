export const MainProductsTypes = {
    FETCH: 'FETCH_MAIN_PRODUCTS',
    FETCH_LOADING: 'FETCH_MAIN_PRODUCTS_LOADING',
    FETCH_SUCCESS: 'FETCH_MAIN_PRODUCTS_SUCCESS',
    FETCH_ERROR: 'FETCH_MAIN_PRODUCTS_ERROR'
  }
  
  const fetch = (path) => ({ type: MainProductsTypes.FETCH, path})
  const fetchLoading = () => ({ type: MainProductsTypes.FETCH_LOADING })
  const fetchSuccess = payload => ({ type: MainProductsTypes.FETCH_SUCCESS, payload })
  const fetchError = error => ({ type: MainProductsTypes.FETCH_ERROR, error })
  
  export default {
    fetch,
    fetchLoading,
    fetchSuccess,
    fetchError
  }
  