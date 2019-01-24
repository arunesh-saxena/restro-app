
import axios from 'axios';
import service from '../config/dev-config';

export default (req, res, next) => {
    const endPoint = service.signUp.default;
    const body = req.body;
    const payLoad = {
        "username": body.username,
        "email": body.email,
        "password":body.username
    }
    const config = {
        method: endPoint.method,
        url: endPoint.url,
        data: payLoad
    };

    axios(config).then(
        (response) => {
            const responseObj = {
                status: response.status,
                statusText: response.statusText,
                data: response.data
            }
            res.json(responseObj);
        },
        (error) => {
            const err = error.response
            // console.log(error);
            const errorObj = {
                status: err.status,
                statusText: err.statusText,
                data: err.data
            }
            res.json(errorObj);
        }
    );
};
