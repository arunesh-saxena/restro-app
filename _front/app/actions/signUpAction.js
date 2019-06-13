import AjaxFactory from '../utils/AjaxFactory';
import expressConstants from '../appConstants/expressEndPoint';
import * as types from '../utils/types';

export const signUp = data => ({
    type: types.SIGN_UP,
    data
});
const submitFormDataSuccess = dispatch => (value) => {
    const { success } = value.body.data;
    if (success) {
        dispatch(signUp(value.body.data));
    } else {
        dispatch(signUp(value.body.data));
    }
};

const submitLoginFormDataFailure = dispatch => (value) => {
    console.log(value);
};

export const submitSignUp = (formData) => {
    const api = expressConstants.SIGN_UP;
    const option = {
        method: api.method,
        url: api.url,
        data: formData
    };
    // const success = submitFormDataSuccess(dispatch, props);
    return (dispatch) => {
        const success = submitFormDataSuccess(dispatch);
        const failure = submitLoginFormDataFailure(dispatch);
        AjaxFactory.triggerServerRequest(option)
            .then(success)
            .catch(failure);
    };
};
