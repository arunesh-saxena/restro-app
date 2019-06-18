import expressConstants from '../app/appConstants/expressEndPoint';

const express = require('express');
const multer = require('multer');

const routes = express.Router();
const storage = multer.diskStorage({
    destination(req, file, cb) {
        cb(null, './uploads');
    },
    filename(req, file, cb) {
        const info = file.originalname.split('.');
        const ext = info[info.length - 1];
        cb(null, `${info[0]}-${Date.now()}.${ext}`);
    }
});

const upload = multer({ storage }).single('imageURL');

/* testing */
routes.get(expressConstants.TEST_API.url, (req, res) => {
    res.status('200').json({
        success: false,
        data: { msg: 'testing done' }
    });
});

module.exports = routes;
