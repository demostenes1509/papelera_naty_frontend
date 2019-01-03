import { call, fork, put, take } from 'redux-saga/effects'
import Actions, { FooterTypes } from './footerActions'
import FooterApi from './footerApi'
import {defaultFetch} from '../util/SagasUtil'

const watchFetchFooter = function *() {
  while (true) {
    yield take(FooterTypes.FETCH)
    // yield fork(fetchFooter)
    yield fork(() => defaultFetch(Actions,FooterApi))
  }
}

export default { watchFetchFooter }
