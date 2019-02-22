import AjaxFactory from '../utils/AjaxFactory';
import expressConstants from '../appConstants/expressEndPoint';
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
                    commonUtils.setCookie('username', null, -1);
                } else {
                    console.log(res);
                }
            })
            .catch(error => {
                console.log(error);
            });
    }
};
