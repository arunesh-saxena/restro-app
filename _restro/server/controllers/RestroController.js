import FormData from 'form-data';

import ServiceFactory from '../utils/ServiceFactory';

const service = require('../config/dev-config.json');

/* const getFormData = (req) => {
    const { body } = req;
    const data = new FormData();
    body.restaurantName != undefined && data.append('restaurantName', body.restaurantName);
    body.noOfTables != undefined && data.append('noOfTables', body.noOfTables);
    body.userName != undefined && data.append('userName', body.userName);
    return data;
}; */

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
    res.json(config);
    // ServiceFactory.triggerserviceRequest(config)
    //     .then((response) => {
    //         res.json(response.data);
    //     })
    //     .catch((error) => {
    //         console.log(error);
    //         res.send(error.data);
    //     });
};

export const getRestroList = (req, res, next) => {
    const endPoint = service.getRestroList.default;
    const config = {
        method: endPoint.method,
        url: endPoint.url,
        headers: endPoint.headers
    };
    console.log(config);

    ServiceFactory.triggerserviceRequest(config)
        .then((response) => {
            res.json(response.data);
        })
        .catch((error) => {
            console.log(error);
            res.send(error.data);
        });
};
