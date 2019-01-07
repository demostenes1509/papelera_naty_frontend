import { SidebarTypes } from './sidebarActions'
import ReducerUtil from 'components/util/ReducerUtil'

const initialState = {
  loading: false,
  payload: { categories: [], offers: [] },
  error: null
}

export default (state = initialState, action) => {
  return ReducerUtil.defaultFetch(initialState,state,action, SidebarTypes);
}