import { combineReducers } from 'redux';
import footerReducer from 'components/footer/footerReducer';
import sidebarReducer from 'components/sidebar/sidebarReducer';
import mainProductsReducer from 'components/maincontent/mainproducts/mainProductsReducer';
import loginReducer from 'components/authentication/existingcustomer/loginReducer';

const rootReducers = combineReducers({
    footerReducer,
    sidebarReducer,
    mainProductsReducer,
    loginReducer
})

export default rootReducers
