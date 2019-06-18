import ServiceFactory from '../utils/ServiceFactory';

const FormData = require('form-data');
const fs = require('fs');
const service = require('../config/dev-config.json');

export const menuList = (req, res, next) => {
    const endPoint = service.menuList.default;
    const config = {
        method: endPoint.method,
        url: endPoint.url,
        headers: endPoint.headers
    };

    ServiceFactory.triggerserviceRequest(config)
        .then((response) => {
            res.json(response.data);
        })
        .catch((error) => {
            console.log(error);
            res.send(error.data);
        });
};

export const menuItem = (req, res, next) => {
    const itemId = req.params.itemID;
    const endPoint = service.menuItem.default;
    const config = {
        method: endPoint.method,
        url: `${endPoint.url}${itemId}`,
        headers: endPoint.headers
    };

    ServiceFactory.triggerserviceRequest(config)
        .then((response) => {
            res.json(response.data);
        })
        .catch((error) => {
            console.log(error);
            res.send(error.data);
        });
};

// TODO: put update item quantity serive call
export const changeMenuItemQuantity = (req, res, next) => {
    const endPoint = service.changeMenuItemQuantity.default;
    const { body } = req;
    const config = {
        method: endPoint.method,
        url: endPoint.url,
        headers: endPoint.headers,
        data: {
            itemId: body.itemId,
            quantity: body.quantity
        }
    };
    ServiceFactory.triggerserviceRequest(config)
        .then((response) => {
            res.json(response.data);
        })
        .catch((error) => {
            console.log(error);
            res.send(error.data);
        });
};
