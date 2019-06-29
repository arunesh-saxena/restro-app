const express = require('express');

const routes = express.Router();

const cors = require('cors');
const multer = require('multer');
const jwt = require('jsonwebtoken');

const storage = multer.diskStorage({
    destination(req, file, cb) {
        cb(null, './assets/uploads');
    },
    filename(req, file, cb) {
        const info = file.originalname.split('.');
        const ext = info[info.length - 1];
        cb(null, `${info[0]}-${Date.now()}.${ext}`);
    }
});

const upload = multer({ storage }).single('imageURL');

routes.post('/imageUpload', upload, (req, res) => {
    console.log('hello', req.body);
});

/* controllers start */
const userCtrl = require('../controllers/userController');
const menuCtrl = require('../controllers/menuController');
const orderCtrl = require('../controllers/orderController');
const cartCtrl = require('../controllers/cartContoller');
const restroCtrl = require('../controllers/restroControler');
/* controllers end */

const CONSTANTS = require('../constants');

const { token_secret } = CONSTANTS;

const isAuthenticated = (req, res, next) => {
    // check for token in the header first, then if not provided, it checks whether it's supplied in the body of the request
    const token = req.headers['x-access-token'] || req.body.token;
    if (token) {
        jwt.verify(token, token_secret, (err, decoded) => {
            if (!err) {
                req.decoded = decoded; // this add the decoded payload to the client req (request) object and make it available in the routes
                next();
            } else {
                res.json({
                    success: false,
                    data: {
                        message: 'Invalid token supplied'
                    }
                });
            }
        });
    } else {
        res.json({
            success: false,
            data: {
                message: 'Authorization failed! Please provide a valid token'
            }
        });
    }
};
const issue2options = {
    origin: [
        CONSTANTS.allowedOrigin,
        CONSTANTS.allowedOrigin2,
        CONSTANTS.allowedOrigin3,
        CONSTANTS.allowedOrigin4
    ],
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
    maxAge: 3600
};
routes.use(cors(issue2options));
/* routes.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', CONSTANTS.allowedOrigin);
    res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Access-Control-Allow-Credentials', 'true');
    next();
}); */

/* User routes */
/* Start _user by _restro login and signUp */

routes.post('/singup', userCtrl.singUp);
routes.post('/login/', userCtrl.login);
routes.get('/logout', userCtrl.logout);
/* check is user is loggin on server */
routes.post('/isLogin', isAuthenticated, (req, res) => {
    const { decoded } = req;
    res.json({
        success: true,
        data: {
            username: decoded.username
        }
    });
});

/* End */

/* Start used by _restor admin for menu actions */

routes.post('/menu/add/', upload, menuCtrl.addMenu);
routes.post('/menu/list/', menuCtrl.getMenuList);
routes.get('/menu/getMenuItem/:itemID/', menuCtrl.getMenuItem);
routes.post('/menu/updateMenuItem/', upload, menuCtrl.updateMenuItem);
routes.put('/menu/changeMenuItemQuantity/', menuCtrl.changeMenuItemQuantity);
routes.put('/menu/toggleHiddenMenuItem/', menuCtrl.toggleHiddenMenuItem);
routes.delete('/menu/deleteMenuItem/', menuCtrl.deleteMenuItem);

/* End */

/* Start used by _restor admin for order db actions */

routes.put('/updateOrder', orderCtrl.updateOrder);
routes.get('/getOrder/', orderCtrl.getOrder);
routes.get('/ordersList/', orderCtrl.getOrdersList);

/* End */
/* Start used by _restro admin form restaurant */

routes.post('/addRestro/', restroCtrl.addRestro);
routes.get('/getRestroList/', restroCtrl.getRestroList);
routes.get('/getRestro/', restroCtrl.getRestro);
routes.put('/updateRestro/', restroCtrl.updateRestro);

/* End */
/* Start use by _consumer placeOrder */

routes.get('/isItemAvailable/:itemId', cartCtrl.isItemAvailable);
routes.post('/placeOrder', cartCtrl.placeOrder);
routes.get('/orderStatus', cartCtrl.orderStatus);

/* End */

/* Start testing */

routes.get('/test', (req, res) => {
    res.render('test');
});
routes.get('/testApi', (req, res) => {
    res.json({
        success: true,
        data: { msg: 'testing done' }
    });
});

/* End */

module.exports = routes;
