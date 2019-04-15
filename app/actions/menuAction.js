import AjaxFactory from '../utils/AjaxFactory';
import expressConstants from '../appConstants/expressEndPoint';
import * as types from '../utils/types';

export const setMenuUploadAction = data => ({
    type: types.UPLOAD_MENU,
    data
});

export const uploadMenuAction = (formData) => {
    const api = expressConstants.UPLOAD_MENU;
    const option = {
        method: api.method,
        url: api.url,
        data: formData,
    };
    return dispatch => AjaxFactory.triggerServerRequest(option)
        .then(value => {
            const success = value.body && value.body.data && value.body.data.success || null;
            const message = value.body && value.body.data && value.body.data.message || null;
            const data = success && value.body.data.data;
            console.log(value);
            if (success) {
                dispatch(setMenuUploadAction({ success, msg: `${data.itemName} uploaded seccessfully` }));
            } else {
                dispatch(setMenuUploadAction({ success, msg: success ? message : message.message }));
            }
        })
        .catch(error => {
            console.log(error);
        });
};
