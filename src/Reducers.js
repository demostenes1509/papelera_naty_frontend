import { combineReducers } from 'redux';
import footerReducer from './components/footer/footerReducer';
import sidebarReducer from './components/container/sidebar/sidebarReducer';

const rootReducers = combineReducers({
    footerReducer,
    sidebarReducer
})

export default rootReducers
