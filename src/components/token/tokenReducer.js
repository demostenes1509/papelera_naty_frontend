import { TokenTypes } from './tokenActions'
import ReducerUtil from 'components/util/ReducerUtil'

const initialState = {
  loading: false,
  payload: null,
  error: null
}

export default (state = initialState, action) => {
  return ReducerUtil.defaultFetch(initialState,state,action, TokenTypes);
}