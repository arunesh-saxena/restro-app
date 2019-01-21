import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/index';


export default function configureStore(initialState, history) {
    const middleware = [thunk];
    
    const store = createStore(
        rootReducer,
        initialState,
        compose(
            applyMiddleware(...middleware),
            typeof window === 'object' &&
                typeof window.devToolsExtension !== 'undefined'
                ? window.__REDUX_DEVTOOLS_EXTENSION__()
                : f => f
        )
    );
    return store;
}

