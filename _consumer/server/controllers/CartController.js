import ServiceFactory from '../utils/ServiceFactory';

const FormData = require('form-data');
const fs = require('fs');
const service = require('../config/dev-config.json');

export const placeOrder = (req, res, next) => {
    const endPoint = service.placeOrder.default;
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
