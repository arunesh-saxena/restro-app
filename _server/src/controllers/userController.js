const bcrypt = require('bcryptjs');
const session = require('express-session');
const jwt = require('jsonwebtoken');
const CONSTANTS = require('../constants');
const db = require('../models');

const { token_secret } = CONSTANTS;

const singUp = (req, res) => {
    const {
        username, email, password, role
    } = req.body;
    let passwordHash = '';
    db.User.findOne({
        $or: [{ username }, { email }]
    })
        .then((data) => {
            if (!data) {
                bcrypt.genSalt(10, (err, salt) => {
                    bcrypt.hash(password, salt, (err, hash) => {
                        // Store hash in your password DB.
                        passwordHash = hash;
                        // db.User.on('index', function (error) {
                        db.User({
                            username,
                            email,
                            password: passwordHash,
                            role
                        })
                            .save()
                            .then((data) => {
                                delete data.password;
                                res.json({
                                    success: true,
                                    data
                                });
                            })
                            .catch((err) => {
                                res.json({
                                    success: false,
                                    data: err
                                });
                            });
                    });
                });
            } else {
                res.json({
                    success: false,
                    message: `${username === data.username ? username : ''} 
                                    ${
    username === data.username
                                        && email === data.email
        ? 'and'
        : ''
} 
                                    ${
    email === data.email ? email : ''
} is already exsit.`
                });
            }
        })
        .catch((err) => {
            res.json({
                success: false,
                data: err
            });
        });
    // res.json({
    //     success: false,
    //     data: {
    //         message: 'something went wrong'
    //     }
    // })
    /* todo: need to handle when DB connection is not available */
};

const login = (req, res) => {
    db.User.findOne({ username: req.body.username })
        .then((user) => {
            if (user) {
                bcrypt
                    .compare(req.body.password, user.password)
                    .then((result) => {
                        delete user.password;
                        delete user['password'];
                        if (result) {
                            // 1. here our payload contains data we want client to hold for when next they send us any request
                            const payload = {
                                email: user.email,
                                username: user.username,
                                id: user._id
                            };
                            // 2. then we use jwt to sign our payload with our secret defined token_secret
                            const token = jwt.sign(payload, token_secret, {
                                expiresIn: '1h'
                            });
                            res.json({
                                success: true,
                                data: {
                                    username: user.username,
                                    token
                                }
                            });
                        } else {
                            res.json({
                                success: false,
                                message:
                                    "username and password does't not match."
                            });
                        }
                    });
            } else {
                res.json({
                    success: false,
                    message: 'username  not found.'
                });
            }
        })
        .catch((err) => {
            res.json({
                success: false,
                message: err.length ? err : 'something went wrong'
            });
        });
};

const logout = (req, res) => {
    /* TODO: hanlde JWT token  */
    res.json({
        success: true,
        message: 'Logout successfully.'
    });
};

const getMyAccount = async (userName) => {
    const result = await db.User.findOne({ username: userName });
    return result;
};

const getRestaurantsByUserName = async (userName) => {
    const result = await db.Restaurant.find({ userName });
    return result;
};

const myAccount = async (req, res) => {
    const { body } = req;
    const { userName } = body;
    if (!userName) {
        res.json({
            success: false,
            message: 'userName is empty'
        });
        return;
    }

    let userAccount = null;
    let restaurants = [];
    try {
        userAccount = await getMyAccount(userName);
        userAccount = JSON.parse(JSON.stringify(userAccount)); // copying
        delete userAccount['password'];
        restaurants = await getRestaurantsByUserName(userName);
        restaurants = JSON.parse(JSON.stringify(restaurants));

        res.json({
            success: true,
            data: {
                myAccount: {
                    userAccount,
                    restaurants
                }
            }
        });
    } catch (error) {
        res.json({
            success: false,
            message: `${error}`
        });
    }
};

const getUserResautants = async (req, res) => {
    const { body } = req;
    const { userName } = body;
    if (!userName) {
        res.json({
            success: false,
            message: 'userName is empty'
        });
        return;
    }

    let restaurants = [];
    try {
        restaurants = await getRestaurantsByUserName(userName);
        restaurants = JSON.parse(JSON.stringify(restaurants));

        res.json({
            success: true,
            data: {
                restaurants
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
    singUp,
    login,
    logout,
    myAccount,
    getUserResautants
};
