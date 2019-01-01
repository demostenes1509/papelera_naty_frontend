import { all, fork } from 'redux-saga/effects'

import FooterSagas from './components/footer/footerSagas'
import SidebarSagas from './components/container/sidebar/sidebarSagas'

export default function * rootSaga () {
  yield all([
    fork(FooterSagas.watchFetchFooter),
    fork(SidebarSagas.watchFetchSidebar)
  ])
}
