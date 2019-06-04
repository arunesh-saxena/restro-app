import { matchRoutes } from 'react-router-config';
import routes from '../app/routes.jsx';

import pageRenderer from './pageRenderer';
import preRenderMiddleware from './preRenderMiddleware';
import configureStore from '../app/store/configureStore';

/*
 * Export render function to be used in server/config/routes.js
 * We grab the state passed in from the server and the req object from Express/Koa
 * and pass it into the Router.run function.
 */
export default function render(req, res) {
  /* todo: usefull for env config */
  // console.log(`process.env.NODE_ENV : ${process.env.NODE_ENV} | process.env.BUILD : ${process.env.BUILD}`);
  const history = {};
  const initialState = {};
  const store = configureStore(initialState);

  const ROUTES = routes();
  const branch = matchRoutes(ROUTES, req.url);
  preRenderMiddleware(store.dispatch, branch, req, res).then(v => {
    const html = pageRenderer(store, req, res);
    res.status(200).send(html);
  });
}
