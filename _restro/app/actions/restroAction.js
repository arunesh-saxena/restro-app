import AjaxFactory from '../utils/AjaxFactory';
import expressConstants from '../appConstants/expressEndPoint';
import * as types from '../utils/types';
import appUrls from '../appConstants/appUrls';
import { ajaxRequestSuccess, ajaxRequestFailure } from './errors';

export const restroAdded = data => ({
    type: 'types.RESTRO_ADDED',
    data
});

export const addRestro = (formData) => {
    const api = expressConstants.ADD_RESTRO;
    const option = {
        method: api.method,
        url: api.url,
        data: formData
    };
    return dispatch =>
        AjaxFactory.triggerServerRequest(option)
            .then((value) => {
                const data = (value.body && value.body.data) || null;
                const success = (data && value.body.data.success) || null;
                const message = (data && value.body.data.message) || null;
                const list = (success && data.data) || [];
                if (success) {
                    dispatch(ajaxRequestSuccess());
                } else {
                    dispatch(ajaxRequestFailure({ message }));
                }
            })
            .catch((error) => {
                console.log(error);
                dispatch(ajaxRequestFailure({ message: error }));
            });
};
