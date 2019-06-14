const commonUtils = {
    sendError: (err) => {
        const error = err.response;
        let responseObject = {};
        let errorCode = null;
        if (error) {
            /* 500, 404 */
            errorCode = error && error.status;
            responseObject = {
                status: (error && error.status) || null,
                statusText: (error && error.statusText) || null,
                errorCode,
                message: (error && (error.statusText || error.data)) || null,
                success: false
            };
        } else {
            /* server is not availables */
            errorCode = err && err.errno;
            responseObject = {
                status: (err && err.errno) || null,
                statusText: (err && err.code) || null,
                errorCode: err && err.errno,
                message: (err && err.data) || 'server is unavailable',
                success: false
            };
        }

        /* switch (parseInt(errorCode, 10)) {
            case 401:
                responseObject.errorCode = 401;
                responseObject.errorRes = 'Unauthorized';
                break;
            case 402:
                responseObject.errorCode = 402;
                responseObject.errorRes = 'Misconfigured';
                break;
            case 400:
                responseObject.errorCode = 400;
                responseObject.errorRes = 'Bad Request';
                break;
            case 404:
                responseObject.errorCode = 404;
                responseObject.errorRes = 'Not Found';
                break;
            case 500:
                responseObject.errorCode = 500;
                responseObject.errorRes = 'Internal Server Error';
                break;
            case 503:
                responseObject.errorCode = 503;
                responseObject.errorRes = 'Service Unavailable';
                break;
            case 504:
                responseObject.errorCode = 504;
                responseObject.errorRes = 'Gateway Timeout';
                break;
            default:
                responseObject.errorCode = errorCode;
                responseObject.errorRes = 'Unidentified';
                break;
        } */
        return responseObject;
    }
};

export default commonUtils;
