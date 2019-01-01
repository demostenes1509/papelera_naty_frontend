import { FooterTypes } from './footerActions'
import ReducerUtil from '../util/ReducerUtil'

const initialState = {
  loading: false,
  payload: { categories: [] }
}

export default (state = initialState, action) => {
  return ReducerUtil.defaultFetch(initialState,state,action, FooterTypes);
}