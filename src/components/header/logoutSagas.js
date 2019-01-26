import { fork, take, put, call } from 'redux-saga/effects'
import Actions, { LogoutTypes } from './logoutActions'
import LogoutApi from './logoutApi'
import userSessionActions from 'components/usersession/userSessionActions'

export function *logoutPost(actions,api,request) {

  try {
    yield put(actions.postWaiting())
    const response = yield call(() => api.post(request))

		yield put(userSessionActions.notLoggedIn())
  } 
  catch (err) {
    if(err.response && err.response.data) {
      yield put(userSessionActions.loginError(err.response.data.server_error));
    }
    else {
      yield put(userSessionActions.loginError(err));
    }
  }
}

const watchLogout = function *() {
  while (true) {
    const {request} = yield take(LogoutTypes.POST)
    yield fork(() => logoutPost(Actions,LogoutApi,request))
  }
}

export default { watchLogout }
