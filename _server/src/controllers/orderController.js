const db = require('../models');
const CONSTANTS = require('../constants');

const addOrder = (req, res) => {
    const { body } = req;

    const order = db.Order(body).save((err, data) => {
        sendRes(res, err, data);
    });
};
const updateOrder = (req, res) => {
    const { body } = req;
    const orderId = req.params.id;
    const setObj = {
        status: body.status,
        updatedAt: Date.now()
    };
    const order = db.Order.update(
        {
            id: orderId
        },
        {
            $set: setObj
        },
        (err, data) => {
            if (err) {
                sendRes(res, err, data);
            } else {
                getOrderbyId(orderId, (err, data) => {
                    sendRes(res, err, data[0]);
                });
            }
        }
    );
};

var getOrderbyId = (orderId, callback) => {
    db.Order.find({ id: orderId }, (err, data) => {
        callback(err, data);
    });
};

const newOrder = (req, res, body) => {
    const order = db.Order(body).save((err, data) => {
        sendRes(res, err, data);
    });
};

const getOrderList = (req, res) => {
    db.Order.find({}, (err, data) => {
        sendRes(res, err, data);
    });
};

const getOrder = (req, res) => {
    const orderId = req.params.id;
    getOrderbyId(orderId, (err, data) => {
        sendRes(res, err, data[0]);
    });
};

const sendRes = (res, err, data) => {
    if (err) {
        res.status(CONSTANTS.serCode.ISE).json({
            success: false,
            data: err
        });
        // throw err;
    } else {
        res.status(CONSTANTS.serCode.success).json({
            success: true,
            data
        });
    }
};

module.exports = {
    addOrder,
    updateOrder,
    getOrderList,
    getOrder
};
