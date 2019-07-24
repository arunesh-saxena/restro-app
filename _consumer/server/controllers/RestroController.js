import ServiceFactory from '../utils/ServiceFactory';
import service from '../config/dev-config.json';

export const getRestroList = (req, res) => {
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

export const getRestroOrders = (req, res) => {
    const endPoint = service.getRestroOrders.default;
    const { body } = req;
    const config = {
        method: endPoint.method,
        url: endPoint.url,
        headers: endPoint.headers,
        data: body
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
