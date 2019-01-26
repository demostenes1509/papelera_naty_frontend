import { fork, take, put, call } from 'redux-saga/effects'
import Actions, { TokenTypes } from './tokenActions'
import TokenApi from './tokenApi'
import { TOKEN_NAME } from 'components/util/ConstantsUtil'
import { setToken } from 'components/util/SessionUtil'
import userSessionActions from 'components/usersession/userSessionActions'

export function *tokenFetch(actions,api,path=null) {

  try {
    yield put(actions.fetchLoading())
		const response = yield call(() => api.fetch(path))

		setToken(response.data[TOKEN_NAME]);

		if(response.data.isLoggedIn) {
			yield put(userSessionActions.loggedIn(response.data));
		}
		else {
			yield put(userSessionActions.notLoggedIn())
		}

  } 
  catch (err) {
    yield put(userSessionActions.loginError(err));
  }
}


/* --------------------- Watchers ------------------ */
const watchFetchToken = function *() {
  while (true) {
    yield take(TokenTypes.FETCH)
    yield fork(() => tokenFetch(Actions,TokenApi))
  }
}

export default { watchFetchToken }

