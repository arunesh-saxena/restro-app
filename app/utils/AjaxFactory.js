import axios from 'axios';

const AjaxFactory = {
    triggerServerRequest(options) {
        const config = {
            method: options.method,
            url: options.url,
            responseType: options.responseType || 'json',// default
            data: options.data
        };
        // console.log(config);
        // Object.assign(config, options);
        return axios(config).then(
            (response) => {
                // console.log(response);
                const responseObject = {
                    data: response.data || null,
                    status: response.status,
                    statusText: response.statusText,
                    ajaxRequestStatus: 'success'
                };
                return responseObject;
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
                return responseObject;
            }
        );
    }
};

export default AjaxFactory;