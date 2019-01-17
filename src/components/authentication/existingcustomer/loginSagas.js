import { fork, take } from 'redux-saga/effects'
import Actions, { LoginTypes } from './loginActions'
import LoginApi from './loginApi'
import {defaultPost} from 'components/util/SagasUtil'

const watchLogin = function *() {
  while (true) {
    const {request} = yield take(LoginTypes.POST)
    yield fork(() => defaultPost(Actions,LoginApi,request))
  }
}

export default { watchLogin }
