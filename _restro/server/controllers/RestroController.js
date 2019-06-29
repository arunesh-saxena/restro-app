import ServiceFactory from '../utils/ServiceFactory';

const service = require('../config/dev-config.json');

export default (req, res, next) => {
    const endPoint = service.addRestro.default;
    const { body } = req;
    const config = {
        method: endPoint.method,
        url: endPoint.url,
        headers: endPoint.headers,
        data: {
            restaurantName: body.restaurantName,
            noOfTables: body.noOfTables,
            userName: body.userName
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

export const getRestroList = (req, res, next) => {
    const endPoint = service.getRestroList.default;
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
