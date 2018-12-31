import { FooterTypes } from './sidebarActions'

const initialState = {
  loading: false,
  payload: { categories: [] }
}

export default (state = initialState, action) => {
  switch(action.type) {
    case FooterTypes.FETCH_FOOTER_LOADING:
      return {
        loading: true,
        payload: { categories: [] }
      }
    case FooterTypes.FETCH_FOOTER_SUCCESS:
      return {
        loading: false,
        payload: action.payload
      }
    default:
      return state
  }
}