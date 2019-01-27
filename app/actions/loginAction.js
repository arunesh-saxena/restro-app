import AjaxFactory from '../../app/utils/AjaxFactory';
import expressConstants from '../appConstants/expressEndPoint';
import * as types from '../utils/types';
import { setAccountInfo } from './myAccountAction';

export const setLoginDataStatus = (data) => ({
    type: types.SET_LOGIN_DATA_STATUS,
    data
});

const submitFormDataSuccess = (dispatch) => (value) => {
    const success = value.body.data.success;
    if (success) {
        dispatch(setLoginDataStatus(true));
    } else {
        dispatch(setLoginDataStatus(false));
    }
};

const submitLoginFormDataFailure = (dispatch) => (value) => {
    console.log(value);
};

export const submitLogin = (formData) => {
    const api = expressConstants.LOGIN;
    const option = {
        method: api.method,
        url: api.url,
        data: formData
    };
    console.log(option);
    return dispatch => {
        const success = submitFormDataSuccess(dispatch);
        const failure = submitLoginFormDataFailure(dispatch);
        AjaxFactory.triggerServerRequest(option)
            .then(success)
            .catch(failure);
    }
};
