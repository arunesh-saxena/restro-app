import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, withRouter } from 'react-router-dom';
import { renderRoutes, matchRoutes } from 'react-router-config';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

import createRoutes from './routes';
const initialState = window.__INITIAL_STATE__;
if (window.__INITIAL_STATE__ !== null) {
    window.__INITIAL_STATE__ = null;
}
const store = configureStore(initialState,{});
const Routes = createRoutes(store);
const loadData = (dispatch, branch, req, res) => {
    // todo: need more refine use es6
    const promises = [];
    const promisesArray = branch.map(({ route, match }) => {
        if (typeof route.need != 'undefined') {
            // return dispatch(route.need[0](req.headers, res))
            return route.need.map(need => {
                promises.push(dispatch(need(req.headers, res)));
            });
        }
    })

    return Promise.all(promises)
}
const RouteDataLoader = withRouter(class extends React.Component {
 
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
            const res = {
                url: nextProps.location.pathname,
                headers: {}
            };
            loadData(nextProps.dispatch, branch, req, res).then((v) => {
                console.log('================Promise=========');
            });
        }
    }
    render() {
        return this.props.children;
    }
});

ReactDOM.hydrate(
    <Provider store={store}>
        <BrowserRouter>
            <RouteDataLoader routes={Routes} dispatch={store.dispatch}>
                {renderRoutes(Routes)}
            </RouteDataLoader>
        </BrowserRouter>
    </Provider>,
    document.getElementById('app')
);
