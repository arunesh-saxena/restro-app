import ServiceFactory from '../utils/ServiceFactory';

import service from '../config/dev-config.json';

const getActionsList = (req, res, next) => {
    const endPoint = service.getActions.default;
    const config = {
        method: endPoint.method,
        url: endPoint.url
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

export default getActionsList;
