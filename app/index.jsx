import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, withRouter } from 'react-router-dom';
import { renderRoutes, matchRoutes } from 'react-router-config';
import { Provider } from 'react-redux';
import  configureStore  from './store/configureStore';

import createRoutes from './routes';
const initialState = window.__INITIAL_STATE__;
const store = configureStore(initialState);
const Routes = createRoutes(store);
/* const RouteDataLoader = withRouter(class extends React.Component {
    constructor(props) {
        super();
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.location.pathname != this.props.location.pathname) {
            const branch = matchRoutes(
                this.props.routes,
                nextProps.location.pathname
            );
            console.log(branch);
            const req = {
                url: nextProps.location.pathname,
                headers: {}
            };
            // preRenderMiddleware(nextProps.dispatch, branch, req, null);
        }
    }
    render() {
        return this.props.children;
    }
}); */

ReactDOM.hydrate(
    <Provider store={store}>
        <BrowserRouter>
            {/* <RouteDataLoader routes={Routes}> */}
            {renderRoutes(Routes)}
            {/* </RouteDataLoader> */}
        </BrowserRouter>
    </Provider>,
    document.getElementById('app')
);
