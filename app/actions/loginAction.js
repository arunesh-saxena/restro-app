import AjaxFactory from '../../app/utils/AjaxFactory';
import expressConstants from '../appConstants/expressEndPoint';
import * as types from '../utils/types';
import commonUtils from '../utils/commonUtils';

export const setLoginDataStatus = (data) => ({
    type: types.SET_LOGIN_DATA_STATUS,
    data
});

const submitFormDataSuccess = (dispatch) => (value) => {
    const success = value.body.data.success;
    if (success) {
        const username = value.body.data && value.body.data.data && value.body.data.data.username || null;
        const token = value.body.data && value.body.data.data && value.body.data.data.token || null;
        sessionStorage.setItem("token", token);
        dispatch(setLoginDataStatus({ username, msg: null }));
        commonUtils.setCookie('username', username);
    } else {
        sessionStorage.removeItem("token");
        dispatch(setLoginDataStatus({ username: null, msg: value.body.data.message }));
        commonUtils.setCookie('username', null, -1);
    }
};

const submitLoginFormDataFailure = (dispatch) => (value) => {
    sessionStorage.removeItem("token");
    console.log(value);
};

export const submitLogin = (formData) => {
    const api = expressConstants.LOGIN;
    const option = {
        method: api.method,
        url: api.url,
        data: formData,
        token: sessionStorage.getItem("token")
    };

    return dispatch => {
        const success = submitFormDataSuccess(dispatch);
        const failure = submitLoginFormDataFailure(dispatch);
        AjaxFactory.triggerServerRequest(option)
            .then(success)
            .catch(failure);
    }
};
