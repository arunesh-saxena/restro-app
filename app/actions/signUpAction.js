import AjaxFactory from '../../app/utils/AjaxFactory';
import expressConstants from '../appConstants/expressEndPoint';

export const signUp = (data) => ({
    type: 'signUp',
    data
});

export const submitSignUp = (formData) => {
    const api = expressConstants.SIGN_UP;
    const option = {
        method: api.method,
        url: api.url,
        data: formData
    };
    
    return dispatch => AjaxFactory.triggerServerRequest(option).then(response => {
        const data = response.data.data;
        dispatch(signUp(data));
    });
};
