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
    const { order = [], tableId } = body;
    const config = {
        method: endPoint.method,
        url: endPoint.url,
        headers: endPoint.headers,
        data: {
            order,
            tableId
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
