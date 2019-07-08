const db = require('../models');

const saveAction = async (actionData) => {
    const result = await db.Actions(actionData).save();
    return result;
};

const addAction = async (req, res) => {
    const { actionName = null } = req.body;
    if (!actionName) {
        res.json({
            success: false,
            message: 'Please provide actionName'
        });
        return;
    }
    const actionData = {
        actionName
    };
    try {
        const result = await saveAction(actionData);
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
};

const getActions = async (req, res) => {
    try {
        const actionsList = await db.Actions.find({});
        res.json({
            success: true,
            data: {
                actions: actionsList
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
    addAction,
    getActions
};
