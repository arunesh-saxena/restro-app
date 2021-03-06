import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import routes from '../app/routes.jsx';

import staticAssets from './static';
const context = {}
const createApp = (url) => renderToString(
  <StaticRouter
    location={url}
    context={context}
    >
    {renderRoutes(routes)}
  </StaticRouter>
);

const buildPage = ({ componentHTML, initialState }) => `
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Restro</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="Restaurant Self Serive">
    <meta name="keywords" content="Restaurant">
    ${staticAssets.createBootstrapCSS()}
    ${staticAssets.createAppCSS()}
  </head>
  <body>
    <div id="app">server side render<br/>
    ${componentHTML}
    </div>
    <script>window.__INITIAL_STATE__ = ${JSON.stringify(initialState)}</script>
    ${staticAssets.createAppScript()}
  </body>
</html>`;

export default (req) => {
  const initialState = { 'hello': 'hello world' };
  const componentHTML = createApp(req.url);
  return buildPage({
    componentHTML, initialState
  });
};
