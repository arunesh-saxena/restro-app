import ServiceFactory from '../utils/ServiceFactory';
const service = require('../config/dev-config.json');

export default (req, res, next) => {
    const endPoint = service.menuUpload.default;
    const body = req.body;
    const config = {
        method: endPoint.method,
        url: endPoint.url,
        headers: endPoint.headers,
        data: body
    };
    
    console.log('===================');
    // console.log(req.headers)
    console.log(req.file)
    console.log(body)
    // console.log(config);
    console.log('===================');
    res.json(body);
    // ServiceFactory.triggerserviceRequest(config).then(
    //     (response) => {
    //         res.json(response);
    //     }
    // ).catch(error => {
    //     console.log(error);
    //     res.send(error);
    // });
};
