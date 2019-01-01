import { take, fork, call, put } from 'redux-saga/effects'
import Actions, { SidebarTypes } from './sidebarActions'
import SidebarApi from './sidebarApi'

/* --------------------- Watchers ------------------ */

const watchFetchSidebar = function * () {
  while (true) {
    yield take(SidebarTypes.FETCH)
    yield fork(fetchSidebar)
  }
}

export default { watchFetchSidebar }

/* --------------------- Subroutines --------------- */

function * fetchSidebar () {
  try {
    yield put(Actions.fetchLoading())
    const response = yield call(SidebarApi.fetchSidebar)

    if (response.status === 200) {
      console.log('success - fetchSidebar: ', response.data);
      yield put(Actions.fetchSuccess(response.data))
    } else {
      // yield put(Actions.reviewLokalError(''))
      console.log('fetchSidebar fail: ', response)
    }
  } catch (err) {
    console.log('error - fetchSidebar: ', err)
    // yield put(Actions.reviewLokalError(''))
  }
}
