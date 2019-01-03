import { combineReducers } from 'redux';
import footerReducer from './components/footer/footerReducer';
import sidebarReducer from './components/container/sidebar/sidebarReducer';
import mainProductsReducer from './components/container/maincontent/mainproducts/mainProductsReducer';

const rootReducers = combineReducers({
    footerReducer,
    sidebarReducer,
    mainProductsReducer
})

export default rootReducers
