import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import app from './appReducers';
import serverInfo from './serverInfoReducers';
import menu from './menuReducer';
import cart from './cartReducer';
import restro from './restroReducer';
import orders from './ordersReducer';

// Combine reducers with routeReducer which keeps track of
// router state
const rootReducer = combineReducers({
    form: formReducer,
    app,
    menu,
    serverInfo,
    cart,
    restro,
    orders
});
export default rootReducer;
