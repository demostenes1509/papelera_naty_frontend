import { all, fork } from 'redux-saga/effects'

import FooterSagas from 'components/footer/footerSagas'
import SidebarSagas from 'components/sidebar/sidebarSagas'
import MainProductsSagas from 'components/maincontent/mainproducts/mainProductsSagas'
import LoginSagas from 'components/authentication/existingcustomer/loginSagas'
import LoginFacebookSagas from 'components/authentication/newcustomer/loginFacebookSagas'
import LoginGoogleSagas from 'components/authentication/newcustomer/loginGoogleSagas'
import LogoutSagas from 'components/header/logoutSagas'
import TokenSagas from 'components/token/tokenSagas'

export default function *rootSaga () {
  yield all([
    fork(FooterSagas.watchFetchFooter),
    fork(SidebarSagas.watchFetchSidebar),
    fork(MainProductsSagas.watchFetchMainProducts),
    fork(LoginSagas.watchLogin),
    fork(LoginFacebookSagas.watchLogin),
    fork(LoginGoogleSagas.watchLogin),
    fork(LogoutSagas.watchLogout),
    fork(TokenSagas.watchFetchToken)
  ])
}
