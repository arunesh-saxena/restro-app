import axios from 'axios';
import commonUtils from './commonUtils';
const fetch = require('node-fetch');

const errorHandler = error => {
  console.log('******** Error *********');
  console.log((error.response && error.response.data) || error);
  console.log('******** Error *********');
  return commonUtils.sendError(error);
};

const ServiceFactory = {
  triggerserviceRequest(options, isMultiPart = false) {
    const config = {
      method: options.method,
      url: options.url,
      data: options.data,
      headers: options.headers,
      withCredentials: true,
    };

    if (isMultiPart) {
      return fetch(config.url, {
        method: config.method,
        body: config.data,
      })
        .then(function(res) {
          return res.json();
        })
        .then(function(json) {
          return json;
        })
        .catch(error => {
          return errorHandler(error);
        });
    }
    if (!options.headers) {
      delete options.headers;
    }

    return axios(config)
      .then(response => {
        const responseObj = response.data;
        return responseObj;
      })
      .catch(error => {
        return errorHandler(error);
      });
  },
};

export default ServiceFactory;
