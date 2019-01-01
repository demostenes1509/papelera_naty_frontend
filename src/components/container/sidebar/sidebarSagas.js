import { call, fork, put, take } from 'redux-saga/effects'
import Actions, { SidebarTypes } from './sidebarActions'
import SidebarApi from './sidebarApi'
// import SagasUtil from '../../util/SagasUtil'

/* --------------------- Watchers ------------------ */

const fetchSidebar = function *() {

  try {
    yield put(Actions.fetchLoading())
    const response = yield call(SidebarApi.fetch)

    if (response.status === 200) {
      console.log('success - fetchSidebar: ', response.data);
      yield put(Actions.fetchSuccess(response.data))
    } 
    else {
      // yield put(Actions.reviewLokalError(''))
      console.log('fetchSidebar fail: ', response)
    }
  } 
  catch (err) {
    console.log('error - fetchSidebar: ', err)
    // yield put(Actions.reviewLokalError(''))
  }
}

const watchFetchSidebar = function *() {
  while (true) {
    yield take(SidebarTypes.FETCH)
    yield fork(fetchSidebar)
    // yield fork(SagasUtil(Actions,SidebarApi))
  }
}

export default { watchFetchSidebar }

