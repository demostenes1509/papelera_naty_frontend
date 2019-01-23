import { LoginTypes } from './loginActions'
import ReducerUtil from 'components/util/ReducerUtil'

const initialState = {
  waiting: false,
  response: null,
  request: null,
  error: null
}

export default (state = initialState, action) => {
  return ReducerUtil.defaultPost(initialState, state, action, LoginTypes);
}