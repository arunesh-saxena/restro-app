import expressConstants from '../app/appConstants/expressEndPoint';

import {
    menuList,
    menuItem,
    changeMenuItemQuantity
} from './controllers/MenuController';

import { placeOrder, getOrderStatus } from './controllers/CartController';

const express = require('express');
const multer = require('multer');

const routes = express.Router();
/* const storage = multer.diskStorage({
    destination(req, file, cb) {
        cb(null, './uploads');
    },
    filename(req, file, cb) {
        const info = file.originalname.split('.');
        const ext = info[info.length - 1];
        cb(null, `${info[0]}-${Date.now()}.${ext}`);
    }
});

const upload = multer({ storage }).single('imageURL'); */

/* testing */
routes.get(expressConstants.TEST_API.url, (req, res) => {
    res.status('200').json({
        success: false,
        data: { msg: 'testing done' }
    });
});
/* Menu action  */

routes.post(expressConstants.MENU_LIST.url, menuList);
routes.get(`${expressConstants.MENU_ITEM.url}/:itemID`, menuItem);
routes.post(
    expressConstants.MENU_ITEM_QUANTITY_CHANGE.url,
    changeMenuItemQuantity
);
/* Cart  */
routes.post(`${expressConstants.PLACE_ORDER.url}`, placeOrder);
routes.get(`${expressConstants.ORDER_STATUS.url}?:tokenId`, getOrderStatus);

module.exports = routes;
