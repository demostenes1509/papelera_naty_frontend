import { fork, take } from 'redux-saga/effects'
import Actions, { LogoutTypes } from './logoutActions'
import LogoutApi from './logoutApi'
import {defaultPost} from 'components/util/SagasUtil'

const watchLogout = function *() {
  while (true) {
    const {request} = yield take(LogoutTypes.POST)
    yield fork(() => defaultPost(Actions,LogoutApi,request))
  }
}

export default { watchLogout }
