const express = require('express');

const routes = express.Router();
// const session = require('express-session');
const cors = require('cors');
const multer = require('multer');
const jwt = require('jsonwebtoken');

const storage = multer.diskStorage({
    destination(req, file, cb) {
        cb(null, './uploads');
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

/* controllers */
const userCtrl = require('../controllers/userController');
const menuCtrl = require('../controllers/menuController');
const orderCtrl = require('../controllers/orderController');
const cartCtrl = require('../controllers/cartContoller');

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
                // res.status(403).send('Invalid token supplied');
                res.json({
                    success: false,
                    data: {
                        message: 'Invalid token supplied'
                    }
                });
            }
        });
    } else {
        // res.status(403).send('Authorization failed! Please provide a valid token');
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

routes.post('/singup', userCtrl.singUp);

routes.post('/login/', userCtrl.login);

routes.get('/logout', userCtrl.logout);
// routes.post('/logout', userCtrl.logout);
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

/* Restro start */

routes.post('/menu/add/', upload, menuCtrl.addMenu);

routes.post('/menu/list/', menuCtrl.getMenuList);

routes.get('/menu/getMenuItem/:itemID/', menuCtrl.getMenuItem);

routes.post('/menu/updateMenuItem/', upload, menuCtrl.updateMenuItem);
routes.put('/menu/changeMenuItemQuantity/', menuCtrl.changeMenuItemQuantity);
routes.put('/menu/toggleHiddenMenuItem/', menuCtrl.toggleHiddenMenuItem);
routes.delete('/menu/deleteMenuItem/', menuCtrl.deleteMenuItem);

routes.post('/order/add/', orderCtrl.addOrder);

routes.put('/order/:id/', orderCtrl.updateOrder);

routes.get('/order/:id', orderCtrl.getOrder);

routes.get('/orders/', orderCtrl.getOrderList);

routes.post('/placeOrder', cartCtrl.placeOrder);

/* Restro end */

/* testing */

routes.get('/test', (req, res) => {
    // res.status(CONSTANTS.serCode.success).json({
    //         success: false,
    //         data: {msg:'testing done'}
    //       });
    res.render('test');
});
routes.get('/testApi', (req, res) => {
    res.json({
        success: true,
        data: { msg: 'testing done' }
    });
});

module.exports = routes;
