import { combineReducers } from 'redux';
import footerReducer from 'components/footer/footerReducer';
import sidebarReducer from 'components/sidebar/sidebarReducer';
import mainProductsReducer from 'components/maincontent/mainproducts/mainProductsReducer';
import loginReducer from 'components/authentication/existingcustomer/loginReducer';
import loginFacebookReducer from 'components/authentication/newcustomer/loginFacebookReducer';
import logoutReducer from 'components/header/logoutReducer';
import tokenReducer from 'components/token/tokenReducer';
import userSessionReducer from 'components/usersession/userSessionReducer';

const rootReducers = combineReducers({
    footerReducer,
    sidebarReducer,
    mainProductsReducer,
    loginReducer,
    loginFacebookReducer,
    logoutReducer,
		tokenReducer,
		userSessionReducer
})

export default rootReducers
