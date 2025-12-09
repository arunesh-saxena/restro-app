import db from '../models';

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
                quantity: itemQuantity,
                updatedAt: new Date()
            }
        },
        { upsert: false }
    );
    return result;
};

const getMenuItemById = async (itemId) => {
    const result = await db.Menu.findOne({ id: itemId });
    return result;
};
const getOrder = async ({ tokenId = null, orderId = null }) => {
    const result = await db.Order.findOne({
        $or: [{ tokenId }, { id: orderId }]
    });
    return result;
};

const placeOrder = async (req, res) => {
    const { body } = req;
    const { order = [], tableId, restaurantCode } = body;
    const orderItemsId = order.map(item => item.itemId);
    let orderItemsData = [];
    let totalCost = 0;
    try {
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
            totalCost,
            restaurantCode
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
                    message: `${error}`
                });
            }
        } else {
            res.json({
                success: false,
                message: 'Please provide order items'
            });
        }
    } catch (error) {
        res.json({
            success: false,
            message: `${error}`
        });
    }
};

const isItemAvailable = async (req, res) => {
    const { itemId } = req.params;
    let itemDetails = {};

    try {
        itemDetails = await getMenuItemById(itemId);
        itemDetails = JSON.parse(JSON.stringify(itemDetails)); // copying

        const { isHidden, isDeleted, quantity: itemQnt } = itemDetails || {};
        const isAvailable = isHidden || isDeleted || itemQnt > 0;
        Object.assign(itemDetails, {
            isAvailable
        });

        res.json({
            success: true,
            data: {
                item: itemDetails
            }
        });
    } catch (error) {
        res.json({
            success: false,
            message: `${error}`
        });
    }
};

const orderStatus = async (req, res) => {
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
        orderDetail = await getOrder({ tokenId, orderId });
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

export default {
    placeOrder,
    isItemAvailable,
    orderStatus
};
