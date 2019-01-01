import { call, fork, put, take } from 'redux-saga/effects'
import Actions, { FooterTypes } from './footerActions'
import FooterApi from './footerApi'

const fetchFooter = function *() {
  try {
    yield put(Actions.fetchLoading())
    const response = yield call(FooterApi.fetch)

    if (response.status === 200) {
      console.log('success - fetchFooter: ', response.data);
      yield put(Actions.fetchSuccess(response.data))
    } 
    else {
      // yield put(Actions.reviewLokalError(''))
      console.log('fetchFooter fail: ', JSON.stringify(response))
    }
  } 
  catch (err) {
    console.log('error - fetchFooter: ', JSON.stringify(err))
    // yield put(Actions.reviewLokalError(''))
  }
}

const watchFetchFooter = function *() {
  while (true) {
    yield take(FooterTypes.FETCH)
    yield fork(fetchFooter)
  }
}

export default { watchFetchFooter }
