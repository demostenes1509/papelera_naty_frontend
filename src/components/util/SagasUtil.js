import { call, put } from 'redux-saga/effects'

export function *defaultFetch(actions,api,path=null) {

  try {
    yield put(actions.fetchLoading())
    const response = yield call(() => api.fetch(path))

    if (response.status === 200) {
      yield put(actions.fetchSuccess(response.data))
    } 
    else {
      yield put(actions.fetchError(response));
    }
  } 
  catch (err) {
    yield put(actions.fetchError(err));
  }

}
