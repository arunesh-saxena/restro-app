import service from '../config/dev-config';
import ServiceFactory from '../utils/ServiceFactory';

export default (req, res, next) => {
    const endPoint = service.signUp.default;
    const body = req.body;
    const payLoad = {
        "username": body.username,
        "email": body.email,
        "password": body.username
    }
    const config = {
        method: endPoint.method,
        url: endPoint.url,
        data: payLoad
    };

    ServiceFactory.triggerserviceRequest(config).then(
        (response) => {
            res.json(response);
        }
    ).catch(error => {
        res.send(error);
    });
};
