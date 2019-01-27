
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import app from '../reducers/appReducers';
import cart from '../reducers/cartReducer'; 
import signUp from '../reducers/signUpReducers'; 
import login from '../reducers/loginReducer'; 
import myAccount from '../reducers/myAccountReducer'; 

// Combine reducers with routeReducer which keeps track of
// router state
const rootReducer = combineReducers({
    form: formReducer,
    app,
    cart,
    signUp,
    login,
    myAccount,
});
export default rootReducer;