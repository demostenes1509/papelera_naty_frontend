import { fork, take, call, put } from 'redux-saga/effects'
import Actions, { LoginTypes } from './loginActions'
import LoginApi from './loginApi'
import userSessionActions from 'components/usersession/userSessionActions'
import { setToken,setAxiosAuthToken } from 'components/util/SessionUtil';
import jwt from 'jsonwebtoken';
import { JWT_KEY } from 'config';

function *loginPost(actions,api,request) {

  try {
		yield put(actions.postWaiting())
		const response = yield call(() => api.post(request))
		const { token } = response.data;

		setToken(token);
		setAxiosAuthToken(token);
		const payload = jwt.verify(token,JWT_KEY);
		yield put(userSessionActions.loggedIn(payload));
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
    const {request} = yield take(LoginTypes.POST)
    yield fork(() => loginPost(Actions,LoginApi,request))
  }
}

export default { watchLogin }
