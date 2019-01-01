
const defaultFetch = (initialState, state, action, types) => {

  switch(action.type) {
    case types.FETCH:
      return {
        loading: true,
        payload: initialState.payload
      }
    case types.FETCH_SUCCESS:
      return {
        loading: false,
        payload: action.payload
      }
    default:
      return state
  }
};

export default {
  defaultFetch
}