import routes from '../app/routes.jsx';
import { matchRoutes } from 'react-router-config';

import pageRenderer from './pageRenderer';
import { preRenderMiddleware } from './preRenderMiddleware';
import  configureStore  from '../app/store/configureStore';

/*
 * Export render function to be used in server/config/routes.js
 * We grab the state passed in from the server and the req object from Express/Koa
 * and pass it into the Router.run function.
 */
export default function render(req, res) {
    console.log(`------${req.url}--------`);
    const reqURL = req.url;

    const history = {};
    const initialState = {};
    const store = configureStore(initialState);

    const html = pageRenderer(store,req, res);
    res.status(200).send(html);
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

