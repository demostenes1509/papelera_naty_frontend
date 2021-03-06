import { FooterTypes } from './footerActions'
import ReducerUtil from 'components/util/ReducerUtil'

const initialState = {
  loading: false,
  payload: { categories: [] },
  error: null
}

export default (state = initialState, action) => {
  return ReducerUtil.defaultFetch(initialState, state, action, FooterTypes);
}