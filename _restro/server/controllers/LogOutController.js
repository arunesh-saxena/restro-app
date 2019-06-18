import ServiceFactory from '../utils/ServiceFactory';

const service = require('../config/dev-config.json');

export default (req, res, next) => {
    const endPoint = service.logout.default;
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
