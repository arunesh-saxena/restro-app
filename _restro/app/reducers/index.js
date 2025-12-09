import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import app from './appReducers';
import menu from './menuReducer';
import signUp from './signUpReducers';
import user from './loginReducer';
import myAccount from './myAccountReducer';
import serverInfo from './serverInfoReducers';
import order from './orderReducer';
import restro from './restroReducer';

// Combine reducers with routeReducer which keeps track of
// router state
const rootReducer = combineReducers({
    form: formReducer,
    app,
    menu,
    signUp,
    user,
    myAccount,
    serverInfo,
    order,
    restro
});
export default rootReducer;
