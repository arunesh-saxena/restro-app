import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, withRouter } from 'react-router-dom';
import { renderRoutes, matchRoutes } from 'react-router-config';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import preRenderMiddleware from '../server/preRenderMiddleware';

import createRoutes from './routes';

const initialState = window.__INITIAL_STATE__;
if (window.__INITIAL_STATE__ !== null) {
    window.__INITIAL_STATE__ = null;
}
const store = configureStore(initialState, {});
const Routes = createRoutes(store);

const RouteDataLoader = withRouter(
    class extends React.Component {
        componentWillReceiveProps(nextProps) {
            if (nextProps.location.pathname != this.props.location.pathname) {
                const branch = matchRoutes(
                    this.props.routes,
                    nextProps.location.pathname
                );
                const req = {
                    url: nextProps.location.pathname,
                    headers: {}
                };
                preRenderMiddleware(nextProps.dispatch, branch, req, null).then(
                    (v) => {
                        console.log(
                            '------------------Promise-end------------------'
                        );
                    }
                );
            }
        }

        render() {
            return this.props.children;
        }
    }
);

ReactDOM.hydrate(
    <Provider store={store}>
        <BrowserRouter>
            <RouteDataLoader routes={Routes} dispatch={store.dispatch}>
                {/* <Switch> */}
                {renderRoutes(Routes)}
                {/* </Switch> */}
            </RouteDataLoader>
        </BrowserRouter>
    </Provider>,
    document.getElementById('app')
);
