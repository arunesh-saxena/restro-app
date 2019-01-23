var express = require('express');
var routes = express.Router();
import expressConstants from '../app/appConstants/expressEndPoint';

/* testing */
routes.get(expressConstants.TEST_API.url, function (req, res) {
    res.status('200').json({
        success: false,
        data: { msg: 'testing done' }
    });
});

routes.get(expressConstants.SIGN_UP.url, function (req, res) {
    res.status('200').json({
        success: false,
        data: { msg: 'sign uptesting done' }
    });
});



module.exports = routes;
