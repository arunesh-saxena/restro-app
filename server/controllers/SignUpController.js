
import axios from 'axios';
import service from '../config/dev-config';

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
    )
        .catch(error => {
            const err = error.response
            console.log('#############');
            let errorObj = {};
            if (!!err) {
                /* 500, 404 */
                errorObj = {
                    status: err && err.status || null,
                    statusText: err && err.statusText || null,
                    errorCode: err && err.status,
                    data: err && { message: err.statusText || err.data || null },
                };
            } else {
                /* server is not availables */
                errorObj = {
                    status: error && error.errno || null,
                    statusText: error && error.code || null,
                    errorCode: error && error.errno,
                    data: error && error.data || { message: 'server is unavailable' },

                };
            }
            // console.log(errorObj);
            res.send(errorObj);
        });
};
