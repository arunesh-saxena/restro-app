const bcrypt = require('bcryptjs');
const session = require('express-session');
const jwt = require('jsonwebtoken');
const CONSTANTS = require('../constants');
const db = require('../models');

const {token_secret} = CONSTANTS;

const singUp = function (req, res) {
    const {username} = req.body;
    const {email} = req.body;
    const {password} = req.body;
    const {role} = req.body;
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
                    data: {
                        message: `${
                            username == data.username ? username : ''
                        } ${
                            username == data.username && email == data.email
                                ? 'and'
                                : ''
                        } ${
                            email == data.email ? email : ''
                        } is already exsit.`
                    }
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

const login = function (req, res) {
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

module.exports = {
    singUp,
    login,
    logout
};
