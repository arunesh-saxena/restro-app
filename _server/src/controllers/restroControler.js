const db = require('../models');
const CONSTANTS = require('../constants');

const saveRestaurant = async (restroData) => {
    const result = await db.Restaurant(restroData).save();
    return result;
};
const addRestro = async (req, res) => {
    const { body } = req;
    const { userName = null, restaurantName = null, noOfTables = null } = body;
    if (!(userName || restaurantName || noOfTables)) {
        res.json({
            success: false,
            message: 'Please provide userName, restaurantName, noOfTables'
        });
        return;
    }
    try {
        const restroData = {
            userName,
            restaurantName,
            noOfTables
        };
        const result = await saveRestaurant(restroData);
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

module.exports = {
    addRestro
};
