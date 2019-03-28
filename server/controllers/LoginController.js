import ServiceFactory from '../utils/ServiceFactory';
const service = require('../config/dev-config.json');

export default (req, res, next) => {
    const endPoint = service.login.default;
    const body = req.body;
    const config = {
        method: endPoint.method,
        url: endPoint.url,
        headers: endPoint.headers,
        data: {
            "username": body.username,
            "password": body.password
        }
    };

    ServiceFactory.triggerserviceRequest(config).then(
        (response) => {
            res.json(response);
        }
    ).catch(error => {
        console.log(error);
        res.send(error);
    });
};
