var express = require('express');
var routes = express.Router();
var multer = require('multer');
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads')
    },
    filename: function (req, file, cb) {
        let info = file.originalname.split('.');
        const ext = info[info.length - 1];
        cb(null, `${info[0]}-${Date.now()}.${ext}`)
    }
});

var upload = multer({ storage: storage }).single('imageURL');

import expressConstants from '../app/appConstants/expressEndPoint';
import SignUpController from './controllers/SignUpController';
import LoginController from './controllers/LoginController';
import LogOutController from './controllers/LogOutController';
import MyAccountController from './controllers/MyAccountController';
import {
    uploadMenu,
    menuList,
    menuItem,
    updateMenuItem,
    changeMenuItemQuantity
} from './controllers/MenuController';

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
routes.post(expressConstants.ISLOGIN.url, MyAccountController);
routes.post(expressConstants.UPLOAD_MENU.url, upload, uploadMenu);
routes.post(expressConstants.MENU_LIST.url, menuList);
routes.get(`${expressConstants.MENU_ITEM.url}/:itemID`, menuItem);
routes.post(expressConstants.MENU_ITEM_UPDATE.url, upload, updateMenuItem);
routes.post(expressConstants.MENU_ITEM_QUANITY_CHANGE.url, changeMenuItemQuantity);

module.exports = routes;
