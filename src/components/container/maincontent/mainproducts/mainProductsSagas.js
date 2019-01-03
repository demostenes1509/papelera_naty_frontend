import { call, fork, put, take } from 'redux-saga/effects'
import Actions, { MainProductsTypes } from './mainProductsActions'
import MainProductsApi from './mainProductsApi'
import {defaultFetch} from '../../../util/SagasUtil'

/* --------------------- Watchers ------------------ */
const watchFetchMainProducts = function *() {
  while (true) {
    yield take(MainProductsTypes.FETCH)
    yield fork(() => defaultFetch(Actions,MainProductsApi))
  }
}

export default { watchFetchMainProducts }

