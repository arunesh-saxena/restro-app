import axios from 'axios';
import { resolve } from 'path';

const AjaxFactory = {
    triggerServerRequest(options) {
        /*  const config = {
             method: 'post',
             url: '/user/12345',
             data: {
                 firstName: 'Fred',
                 lastName: 'Flintstone'
             }
         } */
        const config = {
            method: options.method,
            url: `api/${options.url}`,
            responseType: options.responseType || 'json'// default
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