import { fork, take, call, put } from 'redux-saga/effects'
import Actions, { LoginFacebookTypes } from './loginFacebookActions'
import LoginFacebookApi from './loginFacebookApi'
import userSessionActions from 'components/usersession/userSessionActions'

function *loginPost(actions,api,request) {

  try {
    yield put(actions.postWaiting())
    const response = yield call(() => api.post(request))

		yield put(userSessionActions.loggedIn(response.data))
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

const watchLogin = function *() {
  while (true) {
    const {request} = yield take(LoginFacebookTypes.POST)
    yield fork(() => loginPost(Actions,LoginFacebookApi,request))
  }
}

export default { watchLogin }
