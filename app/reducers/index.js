
import { combineReducers } from 'redux';
import app from '../reducers/appReducers';
import cart from '../reducers/cartReducer';


// Combine reducers with routeReducer which keeps track of
// router state
const rootReducer = combineReducers({
    app,
    cart
});
export default rootReducer;