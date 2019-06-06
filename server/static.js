const createAppScript = () =>
    '<script async type="text/javascript" charset="utf-8" src="/assets/app.js"></script>';

const createAppCSS = () =>
    '<link rel= "stylesheet" type="text/css" href="/assets/styles/style.css">';

const createBootstrapCSS = () =>
    '<link rel= "stylesheet" type="text/css" href="/assets/styles/bootstrap.css">';

export default {
    createAppScript,
    createBootstrapCSS,
    createAppCSS
};
