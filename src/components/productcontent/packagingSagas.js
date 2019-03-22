import { fork, take } from 'redux-saga/effects'
import Actions, { PackagingTypes } from './packagingActions'
import PackagingApi from './packagingApi'
import {defaultFetch} from 'components/util/SagasUtil'

/* --------------------- Watchers ------------------ */
const watchFetchPackaging = function *() {
  while (true) {
    yield take(PackagingTypes.FETCH)
    yield fork(() => defaultFetch(Actions,PackagingApi))
  }
}

export default { watchFetchPackaging }

