import { all, fork } from 'redux-saga/effects'

import FooterSagas from './components/footer/footerSagas'

export default function * rootSaga () {
  yield all([
    fork(FooterSagas.watchFetchFooter)
  ])
}
