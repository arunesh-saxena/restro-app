
import axios from 'axios';
import service from '../config/dev-config';
// import AjaxFactory from '../../app/utils/AjaxFactory';

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

    // AjaxFactory.triggerServerRequest(config).then(
    axios(config).then(
        (response) => {
            const responseObj = response.data;
            console.log('______________');
            // console.log(response.data)
            res.json(responseObj);
        }
    )
        .catch(error => {
            const err = error.response
            console.log('#############');
            const errorObj = {
                status: err && err.status || null,
                statusText: err && err.statusText || null,
                data: {
                    data: err && err.data || null,
                    errorCode: err && err.status
                }
            };
            // console.log(errorObj)
            res.send(errorObj);
        });
};
