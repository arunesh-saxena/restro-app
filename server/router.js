var express = require('express');
var routes = express.Router();

/* testing */
routes.get('/testApi', function (req, res) {
    console.log('---------testing---------');
    res.status('200').json({
        success: false,
        data: { msg: 'testing done' }
    });
})



module.exports = routes;
