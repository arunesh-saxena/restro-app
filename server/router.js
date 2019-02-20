var express = require('express');
var routes = express.Router();
import expressConstants from '../app/appConstants/expressEndPoint';
import SignUpController from './controllers/SignUpController';
import LoginController from './controllers/LoginController';
import LogOutController from './controllers/LogOutController';

/* testing */
routes.get(expressConstants.TEST_API.url, function (req, res) {
    res.status('200').json({
        success: false,
        data: { msg: 'testing done' }
    });
});

routes.post(expressConstants.SIGN_UP.url, SignUpController);
routes.post(expressConstants.LOGIN.url, LoginController);
routes.post(expressConstants.LOGOUT.url, LogOutController);



module.exports = routes;
