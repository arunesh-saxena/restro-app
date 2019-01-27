
import axios from 'axios';
import service from '../config/dev-config';
import commonUtils from '../utils/commonUtils';

export default (req, res, next) => {
    const endPoint = service.signUp.default;
    const body = req.body;
    const payLoad = {
        "username": body.username,
        "email": body.email,
        "password": body.username
    }
    const config = {
        method: endPoint.method,
        url: endPoint.url,
        data: payLoad
    };

    axios(config).then(
        (response) => {
            const responseObj = response.data;
            console.log('______________');
            // console.log(responseObj)
            res.json(responseObj);
        }
    ).catch(error => {
        console.log('#############');
        res.send(commonUtils.sendError(error));
    });
};
