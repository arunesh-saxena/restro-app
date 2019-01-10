import { createStore, applyMiddleware,compose } from 'redux';
import rootReducer from '../reducers/index';

const middleware = [];

const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(...middleware),
        typeof window === 'object' &&
            typeof window.devToolsExtension !== 'undefined'
            ? window.devToolsExtension()
            : f => f
    )
);

export default store;
