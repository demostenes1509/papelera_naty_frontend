import { fork, take, put, call } from 'redux-saga/effects'
import Actions, { TokenTypes } from './tokenActions'
import TokenApi from './tokenApi'
import { TOKEN_NAME } from 'components/util/ConstantsUtil'
import { setToken } from 'components/util/SessionUtil'
import userSessionActions from 'components/usersession/userSessionActions'

export function *tokenFetch(actions,api,socketId) {

  try {
    yield put(actions.fetchLoading())
		const response = yield call(() => api.fetch(socketId))

		setToken(response.data[TOKEN_NAME]);

		if(response.data.isLoggedIn) {
			yield put(userSessionActions.loggedIn(response.data));
		}
		else {
			yield put(userSessionActions.notLoggedIn(response.data.socketId))
		}

  } 
  catch (err) {
    yield put(userSessionActions.loginError(err));
  }
}


/* --------------------- Watchers ------------------ */
const watchFetchToken = function *() {
  while (true) {
		const value = yield take(TokenTypes.FETCH)
    yield fork(() => tokenFetch(Actions,TokenApi,value.socketId))
  }
}

export default { watchFetchToken }

