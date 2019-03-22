import { all, fork } from 'redux-saga/effects'

import FooterSagas from 'components/footer/footerSagas'
import SidebarSagas from 'components/sidebar/sidebarSagas'
import PackagingSagas from 'components/productcontent/packagingSagas'
import MainProductsSagas from 'components/maincontent/mainproducts/mainProductsSagas'
import LoginSagas from 'components/authentication/existingcustomer/loginSagas'

export default function *rootSaga () {
  yield all([
    fork(FooterSagas.watchFetchFooter),
    fork(SidebarSagas.watchFetchSidebar),
    fork(PackagingSagas.watchFetchPackaging),
    fork(MainProductsSagas.watchFetchMainProducts),
    fork(LoginSagas.watchLogin)
  ])
}
