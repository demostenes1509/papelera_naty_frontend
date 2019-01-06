export const MainProductsTypes = {
    FETCH: 'FETCH_MAIN_PRODUCTS',
    FETCH_LOADING: 'FETCH_MAIN_PRODUCTS_LOADING',
    FETCH_SUCCESS: 'FETCH_MAIN_PRODUCTS_SUCCESS',
  }
  
  const fetch = (path) => ({ type: MainProductsTypes.FETCH, path})
  const fetchLoading = () => ({ type: MainProductsTypes.FETCH_LOADING })
  const fetchSuccess = payload => ({ type: MainProductsTypes.FETCH_SUCCESS, payload })
  
  export default {
    fetch,
    fetchLoading,
    fetchSuccess
  }
  