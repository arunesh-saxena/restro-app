import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, withRouter } from 'react-router-dom';
import { renderRoutes, matchRoutes } from 'react-router-config';

import Routes from './routes.jsx';

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
    <BrowserRouter>
        {/* <RouteDataLoader routes={Routes}> */}
        {renderRoutes(Routes)}
        {/* </RouteDataLoader> */}
    </BrowserRouter>,
    document.getElementById('app')
);
