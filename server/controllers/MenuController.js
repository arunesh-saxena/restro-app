var FormData = require('form-data');
var fs = require('fs');
import ServiceFactory from '../utils/ServiceFactory';
const service = require('../config/dev-config.json');

export const uploadMenu = (req, res, next) => {
    const endPoint = service.menuUpload.default;
    const body = req.body;
    let data = new FormData();
    body.itemName != 'undefined' && data.append('itemName', body.itemName);
    body.description != 'undefined' && data.append('description', body.description);
    body.quantity != 'undefined' && data.append('quantity', body.quantity);
    body.price != 'undefined' && data.append('price', body.price);
    body.unit != 'undefined' && data.append('unit', body.unit);
    body.currency != 'undefined' && data.append('currency', body.currency);
    if (req.file != 'undefined' && req.file && req.file.path) {
        const fileStream = fs.createReadStream(req.file.path);
        // When the stream is done being read, end the response
        data.append('imageURL', fileStream);
        setTimeout(() => {
            fs.unlink(req.file.path, function (err) {
                if (err) {
                    console.log(`<<--------problem in deleting file${req.file.path}-------->>`);
                    throw err;
                };
            });
        }, 1000);
    }

    const config = {
        method: endPoint.method,
        url: endPoint.url,
        headers: endPoint.headers,
        data: data
    };

    ServiceFactory.triggerserviceRequest(config, true).then(
        (response) => {
            res.json(response);
        }
    ).catch(error => {
        console.log(error);
        res.send(error);
    });

};
/* todo: merge with upload */
export const updateMenuItem = (req, res, next) => {
    const endPoint = service.menuItemUpdate.default;
    const body = req.body;
    let data = new FormData();
    body.itemName != 'undefined' && data.append('itemName', body.itemName);
    body.description != 'undefined' && data.append('description', body.description);
    body.quantity != 'undefined' && data.append('quantity', body.quantity);
    body.price != 'undefined' && data.append('price', body.price);
    body.unit != 'undefined' && data.append('unit', body.unit);
    body.currency != 'undefined' && data.append('currency', body.currency);
    body.itemId != 'undefined' && data.append('itemId', body.itemId);
    if (req.file != 'undefined' && req.file && req.file.path) {
        const fileStream = fs.createReadStream(req.file.path);
        // When the stream is done being read, end the response
        data.append('imageURL', fileStream);
        setTimeout(() => {
            fs.unlink(req.file.path, function (err) {
                if (err) {
                    console.log(`<<--------problem in deleting file${req.file.path}-------->>`);
                    throw err;
                };
            });
        }, 1000);
    }

    const config = {
        method: endPoint.method,
        url: endPoint.url,
        headers: endPoint.headers,
        data: data
    };

    ServiceFactory.triggerserviceRequest(config, true).then(
        (response) => {
            res.json(response);
        }
    ).catch(error => {
        console.log(error);
        res.send(error);
    });

};

export const menuList = (req, res, next) => {
    const endPoint = service.menuList.default;
    const config = {
        method: endPoint.method,
        url: endPoint.url,
        headers: endPoint.headers
    };

    ServiceFactory.triggerserviceRequest(config).then(
        (response) => {
            res.json(response);
        }
    ).catch(error => {
        console.log(error);
        res.send(error);
    });
}


export const menuItem = (req, res, next) => {
    const itemId = req.params.itemID;
    const endPoint = service.menuItem.default;
    const config = {
        method: endPoint.method,
        url: `${endPoint.url}${itemId}`,
        headers: endPoint.headers
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

// TODO: put update item quantity serive call
export const changeMenuItemQuantity = (req, res, next) => {
    const endPoint = service.changeMenuItemQuantity.default;
    const body = req.body;
    const config = {
        method: endPoint.method,
        url: endPoint.url,
        headers: endPoint.headers,
        data: {
            itemId: body.itemId,
            quantity: body.quantity
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


export const toggleHiddenMenuItem = (req, res, next) => {
    const endPoint = service.toggleHiddenMenuItem.default;
    const body = req.body;

    const config = {
        method: endPoint.method,
        url: endPoint.url,
        headers: endPoint.headers,
        data: body
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


export const deleteMenuItem = (req, res, next) => {
    const endPoint = service.deleteMenuItem.default;
    const body = req.body;
    console.log(body)


    const config = {
        method: endPoint.method,
        url: endPoint.url,
        headers: endPoint.headers,
        data: 'data need to change server with update   api'
    };

    // ServiceFactory.triggerserviceRequest(config).then(
    //     (response) => {
    //         res.json(response);
    //     }
    // ).catch(error => {
    //     console.log(error);
    //     res.send(error);
    // });

};
