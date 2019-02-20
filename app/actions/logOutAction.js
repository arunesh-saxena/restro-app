import AjaxFactory from '../utils/AjaxFactory';
import expressConstants from '../appConstants/expressEndPoint';
import * as types from '../utils/types';
import commonUtils from '../utils/commonUtils';
import { setLoginDataStatus } from './loginAction';

export const logOutAction = (formData) => {
    const api = expressConstants.LOGOUT;
    const option = {
        method: api.method,
        url: api.url
    };
    return dispatch => {
        AjaxFactory.triggerServerRequest(option)
            .then(res => {
                const {success,message} = res.body.data;
                if (success) {
                    dispatch(setLoginDataStatus({ username: null, msg: message }));
                    commonUtils.setCookie('username', username, -1);
                } else {
                    console.log(res);
                }
            })
            .catch(error => {
                console.log(error);
            });
    }
};
