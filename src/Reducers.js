import { combineReducers } from 'redux';
import footerReducer from 'components/footer/footerReducer';
import sidebarReducer from 'components/sidebar/sidebarReducer';
import mainProductsReducer from 'components/maincontent/mainproducts/mainProductsReducer';
import loginReducer from 'components/authentication/existingcustomer/loginReducer';
import tokenReducer from 'components/token/tokenReducer';

const rootReducers = combineReducers({
    footerReducer,
    sidebarReducer,
    mainProductsReducer,
    loginReducer,
    tokenReducer
})

export default rootReducers
