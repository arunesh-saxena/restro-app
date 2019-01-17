
import { combineReducers } from 'redux';
import app from '../reducers/appReducers';
import cart from '../reducers/cartReducer'; 
import { reducer as formReducer } from 'redux-form';


// Combine reducers with routeReducer which keeps track of
// router state
const rootReducer = combineReducers({
    app,
    cart,
    form: formReducer
});
export default rootReducer;