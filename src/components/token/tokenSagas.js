import { fork, take } from 'redux-saga/effects'
import Actions, { TokenTypes } from './tokenActions'
import TokenApi from './tokenApi'
import {defaultFetch} from 'components/util/SagasUtil'

/* --------------------- Watchers ------------------ */
const watchFetchToken = function *() {
  while (true) {
    yield take(TokenTypes.FETCH)
    yield fork(() => defaultFetch(Actions,TokenApi))
  }
}

export default { watchFetchToken }

