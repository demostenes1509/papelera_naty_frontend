import { all, fork } from 'redux-saga/effects'

import FooterSagas from './components/footer/footerSagas'
import SidebarSagas from './components/container/sidebar/sidebarSagas'
import MainProductsSagas from './components/container/maincontent/mainproducts/mainProductsSagas'

export default function *rootSaga () {
  yield all([
    fork(FooterSagas.watchFetchFooter),
    fork(SidebarSagas.watchFetchSidebar),
    fork(MainProductsSagas.watchFetchMainProducts)
  ])
}
