
const defaultFetch = (initialState, state, action, types) => {

  switch(action.type) {
    case types.FETCH:
      return {
        loading: true,
        payload: initialState.payload,
        error: null
      }
    case types.FETCH_SUCCESS:
      return {
        loading: false,
        payload: action.payload,
        error: null
      }
    case types.FETCH_ERROR:
      return {
        loading: false,
        error: action.error,
        payload: initialState.payload
      }
    default:
      return state
  }
};

export default {
  defaultFetch
}