import { MainProductsTypes } from './mainProductsActions'
import ReducerUtil from '../../../util/ReducerUtil'

const initialState = {
  loading: false,
  payload: { products: [] }
}

export default (state = initialState, action) => {
  return ReducerUtil.defaultFetch(initialState, state, action, MainProductsTypes);
}