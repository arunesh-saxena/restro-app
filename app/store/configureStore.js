import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers/index';


export default function configureStore(initialState, history) {
    const middleware = [];

    const store = createStore(
        rootReducer,
        initialState,
        compose(
            applyMiddleware(...middleware),
            typeof window === 'object' &&
                typeof window.devToolsExtension !== 'undefined'
                ? window.devToolsExtension()
                : f => f
        )
    );
    return store;
}

