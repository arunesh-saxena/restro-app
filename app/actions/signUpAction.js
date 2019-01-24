import AjaxFactory from '../../app/utils/AjaxFactory';
import expressConstants from '../appConstants/expressEndPoint';

export const signUp = (data) => ({
    type: 'signUp',
    data
});
const submitFormDataSuccess = (dispatch) => (value) => {
    console.log(value);
    const success = value.data.success;
    if (success) {
        dispatch(signUp(value));
    } else {
        
    }
};

const submitLoginFormDataFailure = (dispatch) => (value) => {

};

export const submitSignUp = (formData) => {
    const api = expressConstants.SIGN_UP;
    const option = {
        method: api.method,
        url: api.url,
        data: formData
    };
    // const success = submitFormDataSuccess(dispatch, props);
    return dispatch => {
        const success = submitFormDataSuccess(dispatch);
        const failure = submitLoginFormDataFailure(dispatch);
        AjaxFactory.triggerServerRequest(option)
            .then(success)
            .catch(failure);
    }
};
