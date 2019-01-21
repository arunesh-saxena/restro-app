
import { combineReducers } from 'redux';
import app from '../reducers/appReducers';
import cart from '../reducers/cartReducer'; 
import signUp from '../reducers/signUpReducers'; 

import { reducer as formReducer } from 'redux-form';


// Combine reducers with routeReducer which keeps track of
// router state
const rootReducer = combineReducers({
    app,
    cart,
    signUp,
    form: formReducer
});
export default rootReducer;