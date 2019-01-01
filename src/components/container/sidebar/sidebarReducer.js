import { SidebarTypes } from './sidebarActions'
import ReducerUtil from '../../util/ReducerUtil'

const initialState = {
  loading: false,
  payload: { categories: [], offers: [] }
}

export default (state = initialState, action) => {
  return ReducerUtil.defaultFetch(initialState,state,action, SidebarTypes);
}