import ServiceFactory from '../utils/ServiceFactory';
const service = require('../config/dev-config.json');

export default (req, res, next) => {
  const endPoint = service.signUp.default;
  const body = req.body;
  const payLoad = {
    username: body.username,
    email: body.email,
    password: body.username,
  };
  const config = {
    method: endPoint.method,
    url: endPoint.url,
    data: payLoad,
    headers: endPoint.headers,
  };

  ServiceFactory.triggerserviceRequest(config)
    .then(response => {
      res.json(response);
    })
    .catch(error => {
      console.log(error);
      res.send(error);
    });
};
