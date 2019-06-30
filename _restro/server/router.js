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
    changeMenuItemQuantity,
    toggleHiddenMenuItem,
    deleteMenuItem
} from './controllers/MenuController';
import orderController, { updateOrder } from './controllers/OrderContoller';

import addRestro, {
    getRestroList,
    getRestro
} from './controllers/RestroController';

const express = require('express');
const multer = require('multer');

const routes = express.Router();
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

/* testing */
routes.get(expressConstants.TEST_API.url, (req, res) => {
    res.status('200').json({
        success: false,
        data: { msg: 'testing done' }
    });
});

routes.post(expressConstants.SIGN_UP.url, SignUpController);
routes.post(expressConstants.LOGIN.url, LoginController);
routes.post(expressConstants.LOGOUT.url, LogOutController);
routes.post(expressConstants.ISLOGIN.url, MyAccountController);
/* Menu action  */
routes.post(expressConstants.UPLOAD_MENU.url, upload, uploadMenu);
routes.post(expressConstants.MENU_ITEM_UPDATE.url, upload, updateMenuItem);
routes.post(expressConstants.MENU_LIST.url, menuList);
routes.get(`${expressConstants.MENU_ITEM.url}/:itemID`, menuItem);
routes.post(
    expressConstants.MENU_ITEM_QUANITY_CHANGE.url,
    changeMenuItemQuantity
);
routes.post(expressConstants.MENU_ITEM_TOGGLE_HIDDEN.url, toggleHiddenMenuItem);
routes.post(expressConstants.MENU_ITEM_DELETE.url, deleteMenuItem);

/* Order action */
routes.get(expressConstants.ORDER_LIST.url, orderController);
routes.put(expressConstants.UPDATE_ORDER_ACTION.url, updateOrder);

/* Restro action */
routes.post(expressConstants.ADD_RESTRO.url, addRestro);
routes.get(expressConstants.RESTRO_LIST.url, getRestroList);
routes.get(`${expressConstants.GET_RESTRO.url}/:restroID`, getRestro);

module.exports = routes;
