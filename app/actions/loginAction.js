import AjaxFactory from '../../app/utils/AjaxFactory';
import expressConstants from '../appConstants/expressEndPoint';
import * as types from '../utils/types';

export const login = (data) => ({
    type: types.LOGIN,
    data
});
const submitFormDataSuccess = (dispatch) => (value) => {
    const success = value.body.data.success;
    if (success) {
        dispatch(login(value.body.data));
    } else {
        dispatch(login(value.body.data));
    }
};

const submitLoginFormDataFailure = (dispatch) => (value) => {
    console.log(value);
};

export const submitLogin = (formData) => {
    const api = expressConstants.SIGN_UP;
    const option = {
        method: api.method,
        url: api.url,
        data: formData
    };
    console.log(option);
    // return dispatch => {
    //     const success = submitFormDataSuccess(dispatch);
    //     const failure = submitLoginFormDataFailure(dispatch);
    //     AjaxFactory.triggerServerRequest(option)
    //         .then(success)
    //         .catch(failure);
    // }
};
