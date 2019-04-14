import AjaxFactory from '../utils/AjaxFactory';
import expressConstants from '../appConstants/expressEndPoint';
import * as types from '../utils/types';

export const setMenuAction = data => ({
    type: types.UPLOAD_MENU,
    data
});

export const uploadMenuAction = (formData) => {
    console.log(formData);
    const api = expressConstants.UPLOAD_MENU;
    const option = {
        method: api.method,
        url: api.url,
        data: formData,
    };
    return dispatch => AjaxFactory.triggerServerRequest(option)
        .then(value => {
            const success = value.body && value.body.data || null;
            const message = value.body && value.body.data && value.body.data.message || null;
            console.log(value)
        })
        .catch(error => {
            console.log(error);
        });
};
