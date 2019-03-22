import { combineReducers } from 'redux';
import footerReducer from 'components/footer/footerReducer';
import sidebarReducer from 'components/sidebar/sidebarReducer';
import packagingReducer from 'components/productcontent/packagingReducer';
import mainProductsReducer from 'components/maincontent/mainproducts/mainProductsReducer';
import loginReducer from 'components/authentication/existingcustomer/loginReducer';
import userSessionReducer from 'components/usersession/userSessionReducer';

const rootReducers = combineReducers({
    footerReducer,
    sidebarReducer,
    packagingReducer,
    mainProductsReducer,
    loginReducer,
		userSessionReducer
})

export default rootReducers
