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

export function *defaultPost(actions,api,request) {

  try {
    console.log('request',request);
    yield put(actions.postWaiting())
    const response = yield call(() => api.post(request))

    console.log('MEC>2');
    if (response.status === 200) {
      yield put(actions.postSuccess(response.data))
    } 
    else {
      yield put(actions.postError(response));
    }
  } 
  catch (err) {
    console.log('MEC>3:',err);
    console.log('MEC>3.1:',JSON.stringify(err.response.data,null,'   '));
    yield put(actions.postError(err));
  }

}
