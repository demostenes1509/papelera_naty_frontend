import { MainProductsTypes } from './mainProductsActions'
import ReducerUtil from 'components/util/ReducerUtil'

const initialState = {
  loading: false,
  payload: { products: [] },
  error: null
}

export default (state = initialState, action) => {
  return ReducerUtil.defaultFetch(initialState, state, action, MainProductsTypes);
}