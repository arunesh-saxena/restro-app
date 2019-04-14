import axios from 'axios';
import commonUtils from './commonUtils';

const ServiceFactory = {
    triggerserviceRequest(options) {
        const config = {
            method: options.method,
            url: options.url,
            data: options.data,
            headers: options.headers,
            withCredentials: true
        };
        if (!options.headers) {
            delete options.headers;
        }
        // Object.assign(config, options);
        return axios(config).then(
            (response) => {
                const responseObj = response.data;
                // console.log('--------------');
                return responseObj;
            }
        ).catch(error => {
            console.log('******** Error *********')
            console.log( error.response.data);
            console.log('******** Error *********')
            return commonUtils.sendError(error);
        });
    }
};

export default ServiceFactory;