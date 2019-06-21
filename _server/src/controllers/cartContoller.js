const db = require('../models');

const getMenuList = async (ids = []) => {
    let list = [];
    if (ids && ids.length) {
        await db.Menu.find({ id: { $in: ids } }, (err, data) => {
            if (err) {
                console.log(err);
                return err;
            }
            list = data;
        });
    }
    return list;
};

const saveOrder = async (orderData) => {
    const result = await db.Order(orderData).save();
    return result;
};
const placeOrder = async (req, res) => {
    const { body } = req;
    const { order = [], tableId } = body;
    const orderItemsId = order.map(item => item.itemId);
    let orderItemsData = [];
    // get order list from db
    const itemsArr = await getMenuList(orderItemsId);

    let totalCost = 0;

    orderItemsData = itemsArr.map((item) => {
        const itemQuantity = order.find(val => val.itemId === item.id);
        totalCost += (itemQuantity.quantity * item.price);
        return {
            id: item.id,
            itemName: item.itemName,
            quantity: itemQuantity.quantity,
            price: item.price,
            unit: item.unit,
            itemCode: item.itemCode,
            itemCost: itemQuantity.quantity * item.price
        };
    });

    const orderData = {
        tableId,
        items: orderItemsData,
        totalCost
    };

    if (orderData.tableId && orderData.items && orderData.items.length) {
        try {
            const result = await saveOrder(orderData);
            res.json({
                success: true,
                data: result
            });
        }
        catch (error) {
            res.json({
                success: false,
                message: error
            });
        }
    } else {
        res.json({
            success: false,
            message: 'Please provide order items'
        });
    }
};

module.exports = {
    placeOrder
};
