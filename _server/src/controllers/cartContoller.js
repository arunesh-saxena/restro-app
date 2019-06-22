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

const updateMenuQuantity = async ({ itemId, itemQuantity }) => {
    const result = await db.Menu.findOneAndUpdate(
        { id: itemId },
        {
            $set: {
                quantity: itemQuantity
            }
        },
        { upsert: false }
    );
    return result;
};

const placeOrder = async (req, res) => {
    const { body } = req;
    const { order = [], tableId } = body;
    const orderItemsId = order.map(item => item.itemId);
    let orderItemsData = [];
    let totalCost = 0;

    // get order list from db
    const itemsArr = await getMenuList(orderItemsId);

    orderItemsData = await itemsArr
        .map((item, ind) => {
            const { id: itemId, quantity: itemQuantity } = item;
            let menuUpdatedResult = null;
            const orderItem = order.find(val => val.itemId === itemId);
            // isOrderedItem available
            const newItemQnt = itemQuantity - orderItem.quantity;

            if (newItemQnt > -1) {
                // update item quanity in menu table
                menuUpdatedResult = updateMenuQuantity({
                    itemId,
                    itemQuantity: newItemQnt
                });
            }
            if (menuUpdatedResult) {
                totalCost += orderItem.quantity * item.price;
                return {
                    id: itemId,
                    itemName: item.itemName,
                    quantity: orderItem.quantity,
                    price: item.price,
                    unit: item.unit,
                    itemCode: item.itemCode,
                    itemCost: orderItem.quantity * item.price
                };
            }
            return null;
        })
        .filter(item => item);

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
        } catch (error) {
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
