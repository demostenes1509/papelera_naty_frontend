import { call, put } from 'redux-saga/effects'
import { TOKEN_NAME } from 'components/util/ConstantsUtil'

export function *defaultFetch(actions,api,path=null) {

  try {
    yield put(actions.fetchLoading())
    const response = yield call(() => api.fetch(path))

    const token = response.headers[TOKEN_NAME];
    if(token) {
      localStorage.setItem(TOKEN_NAME,token);
    }

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
