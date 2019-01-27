import axios from 'axios';

const ServiceFactory = {
    triggerserviceRequest(options) {
        const config = {
            method: options.method,
            url: options.url,
            data: options.data,
            responseType: options.responseType || 'json'// default
        };
        // Object.assign(config, options);
        return axios(config).then(
            (response) => {
                const responseObj = response.data;
                // console.log('--------------');
                return responseObj;
            }
        ).catch(error => {
            console.log('******** Error *********')
            return commonUtils.sendError(error);
        });
    }
};

export default ServiceFactory;