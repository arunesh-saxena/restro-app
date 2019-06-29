const db = require('../models');
const CONSTANTS = require('../constants');

const updateOrderByIdOrToken = async ({
    tokenId = null,
    orderId = null,
    setObj = {}
}) => {
    const infoToUpdate = Object.assign(
        {
            updatedAt: new Date()
        },
        setObj
    );

    const result = await db.Order.findOneAndUpdate(
        { $or: [{ id: orderId }, { tokenId }] },
        {
            $set: infoToUpdate
        },
        {
            upsert: false,
            new: true
        }
    );

    return result;
};

const getOrderByIdORTokenId = async ({ tokenId = null, orderId = null }) => {
    const result = await db.Order.findOne({
        $or: [{ tokenId }, { id: orderId }]
    });
    return result;
};

const updateOrder = async (req, res) => {
    const { orderId, tokenId, orderStatus } = req.body || {};

    if (!(orderId || tokenId) || !orderStatus) {
        res.json({
            success: false,
            message: 'Please provide orderId, tokenId, orderStatus'
        });
        return;
    }

    const setObj = {
        status: orderStatus
    };
    try {
        const updatedOrder = await updateOrderByIdOrToken({
            tokenId,
            orderId,
            setObj
        });
        res.json({
            success: true,
            data: {
                order: updatedOrder
            }
        });
    } catch (error) {
        res.json({
            success: false,
            message: `${error}`
        });
    }
};

const getOrdersList = async (req, res) => {
    try {
        const ordersList = await db.Order.find({});
        res.json({
            success: true,
            data: {
                orders: ordersList
            }
        });
    } catch (error) {
        res.json({
            success: false,
            message: `${error}`
        });
    }
};

const getOrder = async (req, res) => {
    const { tokenId = null, orderId = null } = req.query;
    if (!(orderId || tokenId)) {
        res.json({
            success: false,
            message: 'Please provide orderId, tokenId'
        });
        return;
    }
    let orderDetail = {};
    try {
        orderDetail = await getOrderByIdORTokenId({ tokenId, orderId });
        orderDetail = JSON.parse(JSON.stringify(orderDetail)); // copying

        res.json({
            success: true,
            data: {
                order: orderDetail
            }
        });
    } catch (error) {
        res.json({
            success: false,
            message: `${error}`
        });
    }
};

module.exports = {
    updateOrder,
    getOrdersList,
    getOrder
};
