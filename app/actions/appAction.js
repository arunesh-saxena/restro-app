import AjaxFactory from '../utils/AjaxFactory';
import expressConstants from '../appConstants/expressEndPoint';
import commonUtils from '../utils/commonUtils';
import { setLoginDataStatus } from './loginAction';
import * as types from '../utils/types';

export const setLanguage = data => ({
    type: types.SET_LANGUAGE,
    data,
});

export const checkIsLogin = (headers, res) => {
    const clientCookies =
        typeof document !== 'undefined'
            ? commonUtils.parseCookies(document.cookie)
            : null;
    let cookies = {};
    const isAvail = !!(headers || clientCookies);

    if (isAvail) {
        if (Object.keys(headers || {}).length > 0) {
            cookies = commonUtils.parseCookies(headers.cookie);
        } else if (clientCookies) {
            cookies = clientCookies;
        }
    }
    const { _token } = cookies;

    const api = expressConstants.ISLOGIN;
    const option = {
        method: api.method,
        url: api.url,
        data: {
            token: _token || null,
        },
    };
    return dispatch => {
        return AjaxFactory.triggerServerRequest(option)
            .then(value => {
                const success = (value.body && value.body.data) || null;
                const message =
                    (value.body &&
                        value.body.data &&
                        value.body.data.message) ||
                    null;
                if (success) {
                    const username =
                        (value.body &&
                            value.body.data &&
                            value.body.data.data &&
                            value.body.data.data.username) ||
                        null;
                    dispatch(setLoginDataStatus({ username, msg: null }));
                } else {
                    dispatch(
                        setLoginDataStatus({ username: null, msg: message })
                    );
                }
            })
            .catch(error => {
                console.log(error);
            });
    };
};
