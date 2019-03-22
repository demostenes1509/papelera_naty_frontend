import { PackagingTypes } from './packagingActions'
import ReducerUtil from 'components/util/ReducerUtil'

const initialState = {
  loading: false,
  payload: [],
  error: null
}

export default (state = initialState, action) => {
  return ReducerUtil.defaultFetch(initialState,state,action, PackagingTypes);
}