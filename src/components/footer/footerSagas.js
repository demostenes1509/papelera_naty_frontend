import { take, fork, call, put } from 'redux-saga/effects'
import Actions, { FooterTypes } from './footerActions'
import FooterApi from './footerApi'

/* --------------------- Watchers ------------------ */

const watchFetchFooter = function * () {
  while (true) {
    yield take(FooterTypes.FETCH_FOOTER)
    yield fork(fetchFooter)
  }
}

export default { watchFetchFooter }

/* --------------------- Subroutines --------------- */

function * fetchFooter () {
  try {
    yield put(Actions.fetchFooterLoading())
    const response = yield call(FooterApi.fetchFooter)

    if (response.status === 200) {
      console.log('success - fetchFooter: ', response.data);
      yield put(Actions.fetchFooterSuccess(response.data))
    } else {
      // yield put(Actions.reviewLokalError(''))
      console.log('fetchFooter fail: ', JSON.stringify(response))
    }
  } catch (err) {
    console.log('error - fetchFooter: ', JSON.stringify(err))
    // yield put(Actions.reviewLokalError(''))
  }
}
