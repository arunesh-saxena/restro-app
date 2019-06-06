import ServiceFactory from '../utils/ServiceFactory';

const service = require('../config/dev-config.json');

export default (req, res, next) => {
    const endPoint = service.islogin.default;
    const { body } = req;
    const config = {
        method: endPoint.method,
        url: endPoint.url,
        data: body,
        headers: endPoint.headers
    };

    ServiceFactory.triggerserviceRequest(config)
        .then((response) => {
            res.json(response);
        })
        .catch((error) => {
            console.log(error);
            res.send(error);
        });
};
