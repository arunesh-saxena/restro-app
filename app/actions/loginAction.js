import AjaxFactory from '../../app/utils/AjaxFactory';
import expressConstants from '../appConstants/expressEndPoint';
import * as types from '../utils/types';
import appUrls from '../appConstants/appUrls';

export const setLoginDataStatus = (data) => ({
    type: types.SET_LOGIN_DATA_STATUS,
    data
});

const submitFormDataSuccess = (dispatch, props) => (value) => {
    const success = value.body.data.success;
    if (success) {
        const username = value.body.data && value.body.data.data && value.body.data.data.username || null;
        const _token = value.body.data && value.body.data.data && value.body.data.data.token || null;
        const now = new Date();
        now.setTime(now.getTime() + 60 * 60 * 1000);
        document.cookie = `_token=${_token};expires=${now.toUTCString()}; path=/`;
        dispatch(setLoginDataStatus({ username, msg: null }));
        props.history.push(appUrls.MENU_LIST);

    } else {
        document.cookie = `_token=;expires=Thu, 18 Dec 2013 12:00:00 UTC; path=/`;
        dispatch(setLoginDataStatus({ username: null, msg: value.body.data.message }));
    }
};

const submitLoginFormDataFailure = (dispatch) => (value) => {
    document.cookie = `_token=;expires=Thu, 18 Dec 2013 12:00:00 UTC; path=/`;
    console.log(value);
};

export const submitLogin = (formData, props) => {
    const api = expressConstants.LOGIN;
    const option = {
        method: api.method,
        url: api.url,
        data: formData
    };

    return dispatch => {
        const success = submitFormDataSuccess(dispatch, props);
        const failure = submitLoginFormDataFailure(dispatch, props);
        AjaxFactory.triggerServerRequest(option)
            .then(success)
            .catch(failure);
    }
};
