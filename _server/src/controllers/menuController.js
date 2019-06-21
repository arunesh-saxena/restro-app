const db = require('../models');

const getMenuItemById = async (itemId) => {
    const result = await db.Menu.findOne({ id: itemId }).exec();
    return result;
};

const addMenu = (req, res) => {
    const { body } = req;
    if (req.file && req.file.path) {
        body.imageURL = req.file && req.file.path;
    }

    const menuMenu = db.Menu(body).save((err, data) => {
        if (err) {
            res.json({
                success: false,
                message: err
            });
        } else {
            res.json({
                success: true,
                data
            });
        }
    });
};

const getMenuList = (req, res) => {
    db.Menu.find({}, (err, data) => {
        if (err) {
            res.json({
                success: false,
                message: err
            });
        } else {
            res.json({
                success: true,
                data
            });
        }
    });
};

const getMenuItem = async (req, res) => {
    const itemId = req.params.itemID;
    try {
        const item = await getMenuItemById(itemId);
        res.json({
            success: true,
            data: item
        });
    } catch (err) {
        res.json({
            success: false,
            data: err
        });
    }
};


const updateMenuItem = (req, res) => {
    const { body } = req;
    if (req.file && req.file.path) {
        body.imageURL = req.file && req.file.path;
    }
    const itemId = parseInt(body.itemId);

    db.Menu.updateOne({ id: itemId },
        {
            $set: {
                ...body
            }
        },
        { upsert: false },
        async function (err, data) {
            if (err) {
                res.json({
                    success: false,
                    message: err
                });
            } else {
                try {
                    const item = await getMenuItemById(itemId);
                    res.json({
                        success: true,
                        data: item
                    });
                } catch (err) {
                    res.json({
                        success: false,
                        data: err
                    });
                }
            }
        });
};

const changeMenuItemQuantity = (req, res) => {
    const { body } = req;
    const itemId = parseInt(body.itemId);
    db.Menu.update(
        { id: itemId },
        {
            $set: {
                quantity: body.quantity
            }
        },
        { upsert: false },
        async (err, data) => {
            if (err) {
                res.json({
                    success: false,
                    message: err
                });
            } else {
                try {
                    const item = await getMenuItemById(itemId);
                    res.json({
                        success: true,
                        data: item
                    });
                } catch (err) {
                    res.json({
                        success: false,
                        data: err
                    });
                }
            }
        }
    );
};

const toggleHiddenMenuItem = (req, res) => {
    const { body } = req;
    const itemId = parseInt(body.itemId);
    db.Menu.updateOne({ id: itemId },
        {
            $set: {
                isHidden: body.isHidden
            }
        },
        { upsert: false },
        async (err, data) => {
            if (err) {
                res.json({
                    success: false,
                    message: err
                });
            } else {
                try {
                    const item = await getMenuItemById(itemId);
                    res.json({
                        success: true,
                        data: item
                    });
                } catch (err) {
                    res.json({
                        success: false,
                        data: err
                    });
                }
            }
        });
};

const deleteMenuItem = (req, res) => {
    const { body } = req;
    const itemId = parseInt(body.itemId);
    db.Menu.update(
        { id: itemId },
        {
            $set: {
                isDeleted: false
            }
        },
        { upsert: false },
        async (err, data) => {
            if (err) {
                res.json({
                    success: false,
                    message: err
                });
            } else {
                try {
                    const item = await getMenuItemById(itemId);
                    res.json({
                        success: true,
                        data: item
                    });
                } catch (err) {
                    res.json({
                        success: false,
                        data: err
                    });
                }
            }
        }
    );
};

module.exports = {
    addMenu,
    getMenuList,
    getMenuItem,
    updateMenuItem,
    changeMenuItemQuantity,
    toggleHiddenMenuItem,
    deleteMenuItem
};
