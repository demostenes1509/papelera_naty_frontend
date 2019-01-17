import { fork, take } from 'redux-saga/effects'
import Actions, { FooterTypes } from './footerActions'
import FooterApi from './footerApi'
import {defaultFetch} from 'components/util/SagasUtil'

const watchFetchFooter = function *() {
  while (true) {
    yield take(FooterTypes.FETCH)
    yield fork(() => defaultFetch(Actions,FooterApi))
  }
}

export default { watchFetchFooter }
