import ServiceFactory from '../utils/ServiceFactory';

const FormData = require('form-data');
const fs = require('fs');
const service = require('../config/dev-config.json');

export const cartOrder = (req, res) => {
    res.json({
        success: true,
        message: 'Todo: comming soon'
    });
};

export const placeOrder = (req, res, next) => {
    const endPoint = service.placeOrder.default;
    const { body } = req;
    const { order = [], tableId, restaurantCode } = body;
    const config = {
        method: endPoint.method,
        url: endPoint.url,
        headers: endPoint.headers,
        data: {
            order,
            tableId,
            restaurantCode
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

export const getOrderStatus = (req, res) => {
    const endPoint = service.orderStatus.default;
    const { tokenId } = req.query;
    const config = {
        method: endPoint.method,
        url: `${endPoint.url}?tokenId=${tokenId}`,
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
