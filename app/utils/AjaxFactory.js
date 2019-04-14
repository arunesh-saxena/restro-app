import axios from 'axios';

const AjaxFactory = {
    triggerServerRequest(options) {
        const config = {
            method: options.method,
            url: options.url,
            data: options.data || {},
            withCredentials: true,
            proxy: {
                port: 3030,
            }
        };
        // if (options.headers) {
        //      config.headers = options.headers;
        // }
        return axios(config).then(
            (response) => {
                // console.log(response);
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
                return { body: responseObject };
            },
            (error) => {
                const responseObject = {
                    ajaxRequestStatus: 'failure',
                    errorCode:
                        error && (error.response && error.response.status),
                    errorData:
                        (error &&
                            (error.response && error.response.data)) ||
                        null
                };
                // console.log(responseObject);
                return responseObject;
            }
        );
    }
};

export default AjaxFactory;