import { call, put } from 'redux-saga/effects'

export function *defaultFetch(actions,api,path=null) {

  try {
    yield put(actions.fetchLoading())
    const response = yield call(() => api.fetch(path))

    if (response.status === 200) {
      // console.log('success - fetchSidebar: ', response.data);
      yield put(actions.fetchSuccess(response.data))
    } 
    else {
      // yield put(Actions.reviewLokalError(''))
      // console.log('fetchSidebar fail: ', response)
    }
  } 
  catch (err) {
    // console.log('error - fetchSidebar: ', err)
    // yield put(Actions.reviewLokalError(''))
  }


}
