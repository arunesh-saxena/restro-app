
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import app from '../reducers/appReducers';
import menu from './menuReducer'; 
import signUp from '../reducers/signUpReducers'; 
import user from '../reducers/loginReducer'; 
import myAccount from '../reducers/myAccountReducer'; 

// Combine reducers with routeReducer which keeps track of
// router state
const rootReducer = combineReducers({
    form: formReducer,
    app,
    menu,
    signUp,
    user,
    myAccount,
});
export default rootReducer;