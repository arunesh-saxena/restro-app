import ServiceFactory from '../utils/ServiceFactory';

const service = require('../config/dev-config.json');

export default (req, res, next) => {
    const endPoint = service.getOrderList.default;
    const config = {
        method: endPoint.method,
        url: endPoint.url,
        headers: endPoint.headers
    };

    ServiceFactory.triggerserviceRequest(config)
        .then((response) => {
            const result = response;
            const { success } = response.data;
            if (success) {
                const { orders = [] } = result.data.data;
                orders.map((item) => {
                    item['isFilter'] = true;
                });
            }
            res.json(result.data);
        })
        .catch((error) => {
            console.log(error);
            res.send(error.data);
        });
};

export const updateOrder = (req, res, next) => {
    const endPoint = service.updateOrder.default;
    const { body } = req;
    const config = {
        method: endPoint.method,
        url: endPoint.url,
        headers: endPoint.headers,
        data: {
            tokenId: body.tokenId,
            orderStatus: body.actionId
        }
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
