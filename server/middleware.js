import routes from '../app/routes.jsx';
import { matchRoutes } from 'react-router-config';

import pageRenderer from './pageRenderer';
import { preRenderMiddleware } from './preRenderMiddleware';
import configureStore from '../app/store/configureStore';

/*
 * Export render function to be used in server/config/routes.js
 * We grab the state passed in from the server and the req object from Express/Koa
 * and pass it into the Router.run function.
 */
const loadData = (dispatch, branch, req, res) => {
    return Promise.all([dispatch(branch.route.need[0](req.headers, res))]);
}
export default function render(req, res) {
    /* todo: usefull for env config */
    // console.log(`process.env.NODE_ENV : ${process.env.NODE_ENV} | process.env.BUILD : ${process.env.BUILD}`);
    const reqURL = req.url;
    const history = {};
    const initialState = {};
    const store = configureStore(initialState);

    /* --------START------- */
    const ROUTES = routes();
    const branch = matchRoutes(ROUTES, req.url);
    loadData(store.dispatch, branch[0], req, res).then((v) => {
        // console.log('================Promise=========', store.getState());
        const html = pageRenderer(store, req, res);
        res.status(200).send(html);
    });
    /* ---------END-------- */

    /* const branch = matchRoutes(routes, req.url);
    preRenderMiddleware(
        store.dispatch,
        branch,
        req,
        res,
        'en'
    )
        .then(() => {
            const html = pageRenderer(store, req.url);
            res.status(200).send(html);
        })
        .catch(error => {
            console.log(`error--- ${error}`);
        }); */
}

