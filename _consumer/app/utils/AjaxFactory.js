import axios from 'axios';

const AjaxFactory = {
    triggerServerRequest(options) {
        const config = {
            method: options.method,
            url: options.url,
            data: options.data || {},
            withCredentials: true,
            proxy: {
                port: 4040
            }
        };
        // if (options.headers) {
        //      config.headers = options.headers;
        // }
        return new Promise((resolve, reject) => {
            axios(config)
                .then((response) => {
                    const responseObject = {
                        data: response.data || [],
                        status: response.status,
                        statusText: response.statusText,
                        ajaxRequestStatus: 'success'
                    };
                    if (!response.data.hasOwnProperty('errorCode')) {
                        responseObject.ajaxRequestStatus = 'success';
                    } else {
                        responseObject.ajaxRequestStatus = 'failure';
                    }
                    return resolve({ body: responseObject });
                })
                .catch((error) => {
                    const responseObject = {
                        ajaxRequestStatus: 'failure',
                        errorCode:
                            error && (error.response && error.response.status),
                        errorData:
                            (error &&
                                (error.response && error.response.data)) ||
                            null
                    };
                    return reject({ body: responseObject });
                });
        });
    }
};

export default AjaxFactory;
