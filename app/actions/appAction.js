
import AjaxFactory from '../utils/AjaxFactory';
import expressConstants from '../appConstants/expressEndPoint';
import commonUtils from '../utils/commonUtils';
import { setLoginDataStatus } from './loginAction';
import * as types from '../utils/types';

export const setLanguage = data => ({
    type: types.SET_LANGUAGE,
    data
});

export const checkIsLogin = () => {
    const api = expressConstants.ISLOGIN;
    const option = {
        method: api.method,
        url: 'http://localhost:3000/api/isLogin'
    };
    return dispatch => {
        AjaxFactory.triggerServerRequest(option)
            .then(value => {
                const { success, message } = value.body.data;
                if (success) {
                    const username = value.body.data && value.body.data.data && value.body.data.data.username || null;
                    // dispatch(setLoginDataStatus({ username, msg: null }));
                    // commonUtils.setCookie('username', username);
                } else {
                    // dispatch(setLoginDataStatus({ username: null, msg: value.body.data.message }));
                    // commonUtils.setCookie('username', null, -1);
                }
            })
            .catch(error => {
                console.log(error);
            });
    }
};