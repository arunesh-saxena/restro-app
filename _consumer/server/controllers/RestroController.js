import ServiceFactory from '../utils/ServiceFactory';

const service = require('../config/dev-config.json');

const getRestroList = (req, res) => {
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

export default getRestroList;
