import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import app from './appReducers';
import errors from './errorsReducers';
import menu from './menuReducer';
import cart from './cartReducer';

// Combine reducers with routeReducer which keeps track of
// router state
const rootReducer = combineReducers({
    form: formReducer,
    app,
    menu,
    errors,
    cart
});
export default rootReducer;
