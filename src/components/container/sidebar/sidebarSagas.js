import { fork, take } from 'redux-saga/effects'
import Actions, { SidebarTypes } from './sidebarActions'
import SidebarApi from './sidebarApi'
import {defaultFetch} from '../../util/SagasUtil'

/* --------------------- Watchers ------------------ */
const watchFetchSidebar = function *() {
  while (true) {
    yield take(SidebarTypes.FETCH)
    yield fork(() => defaultFetch(Actions,SidebarApi))
  }
}

export default { watchFetchSidebar }

