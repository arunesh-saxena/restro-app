import AjaxFactory from '../../app/utils/AjaxFactory';

export const signUp = (data) => ({
    type: 'signUp',
    data
});

export const submitSignUp = (formData) => {
    const option = {
        method: 'GET',
        url: 'testApi',
    };
    return dispatch => AjaxFactory.triggerServerRequest(option).then(response => {
        console.log(response);
        const data = response.data.data;
        dispatch(signUp(data));
    });
};
