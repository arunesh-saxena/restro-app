import axios from 'axios';
import commonUtils from './commonUtils';

const fetch = require('node-fetch');

const errorHandler = (error) => {
    console.log('******** Error Start *********');
    console.log((error.response && error.response.data) || error);
    console.log('******** Error End *********');
    return commonUtils.sendError(error);
};

const ServiceFactory = {
    triggerserviceRequest(options, isMultiPart = false) {
        const config = {
            method: options.method,
            url: options.url,
            data: options.data,
            headers: options.headers,
            withCredentials: true
        };

        if (isMultiPart) {
            return new Promise((resolve, reject) => {
                fetch(config.url, {
                    method: config.method,
                    body: config.data
                })
                    .then(res => res.json())
                    .then((response) => {
                        const responseObject = response;
                        return resolve({
                            data: responseObject
                        });
                    })
                    .catch((error) => {
                        const responseObject = errorHandler(error);
                        return reject({
                            data: responseObject
                        });
                    });
            });
        }
        if (!options.headers) {
            delete options.headers;
        }

        return new Promise((resolve, reject) => {
            axios(config)
                .then((response) => {
                    const responseObject = response.data;
                    return resolve({
                        data: responseObject
                    });
                })
                .catch((error) => {
                    const responseObject = errorHandler(error);
                    return reject({
                        data: responseObject
                    });
                });
        });
    }
};

export default ServiceFactory;
