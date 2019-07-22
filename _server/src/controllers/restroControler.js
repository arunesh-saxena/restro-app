import db from '../models';

const saveRestaurant = async (restroData) => {
    const result = await db.Restaurant(restroData).save();
    return result;
};
const getRestaurantByIdORRestroCode = async ({
    id = null,
    restaurantCode = null
}) => {
    const result = await db.Restaurant.findOne({
        $or: [{ restaurantCode }, { id }]
    });
    return result;
};
const updateRestaurantByIdOrRestroCode = async ({
    id = null,
    restaurantCode = null,
    setObj = {}
}) => {
    const infoToUpdate = Object.assign(
        {
            updatedAt: new Date()
        },
        setObj
    );

    const result = await db.Restaurant.findOneAndUpdate(
        { $or: [{ id }, { restaurantCode }] },
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

const getRestroList = async (req, res) => {
    try {
        const restaurantsList = await db.Restaurant.find({});
        res.json({
            success: true,
            data: {
                restaurants: restaurantsList
            }
        });
    } catch (error) {
        res.json({
            success: false,
            message: `${error}`
        });
    }
};

const getRestro = async (req, res) => {
    const { restaurantCode = null, id = null } = req.query;
    if (!(restaurantCode || id)) {
        res.json({
            success: false,
            message: 'Please provide restaurantCode or id'
        });
        return;
    }
    let restroDetail = {};
    try {
        restroDetail = await getRestaurantByIdORRestroCode({
            restaurantCode,
            id
        });
        restroDetail = JSON.parse(JSON.stringify(restroDetail)); // copying

        res.json({
            success: true,
            data: restroDetail
        });
    } catch (error) {
        res.json({
            success: false,
            message: `${error}`
        });
    }
};

const updateRestro = async (req, res) => {
    const { id, restaurantCode, restroDetails } = req.body || {};

    if (!(id || restaurantCode) || !Object.keys(restroDetails).length) {
        res.json({
            success: false,
            message: 'Please provide restaurant id or restaurantCode'
        });
        return;
    }

    try {
        const setObj = { ...restroDetails };
        const updatedRestro = await updateRestaurantByIdOrRestroCode({
            id,
            restaurantCode,
            setObj
        });
        res.json({
            success: true,
            data: updatedRestro
        });
    } catch (error) {
        res.json({
            success: false,
            message: `${error}`
        });
    }
};

export default {
    addRestro,
    getRestroList,
    getRestro,
    updateRestro
};
