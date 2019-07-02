import AjaxFactory from '../utils/AjaxFactory';
import expressConstants from '../appConstants/expressEndPoint';
import * as types from '../utils/types';
import appUrls from '../appConstants/appUrls';
import { ajaxRequestSuccess, ajaxRequestFailure } from './errors';

export const restroSuccessMsg = data => ({
    type: types.SUCCESS_MSG,
    data
});
export const restroRest = () => ({
    type: types.RESTRO_RESET
});

export const setRestroList = data => ({
    type: types.RESTRO_LIST,
    data
});

export const setInitialRestroDetails = data => ({
    type: types.RESTRO_INITIAL_DETAILS,
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
                if (success) {
                    const restro = (data && data.data) || {};
                    const successMsg = `${
                        restro.restaurantName
                    } added sucessfully`;
                    Promise.all([
                        dispatch(ajaxRequestSuccess()),
                        dispatch(
                            restroSuccessMsg({
                                msg: successMsg,
                                infoType: 'success'
                            })
                        )
                    ]);
                } else {
                    dispatch(ajaxRequestFailure({ message }));
                }
            })
            .catch((error) => {
                console.log(error);
                dispatch(ajaxRequestFailure({ message: error }));
            });
};

export const getRestroList = () => {
    const api = expressConstants.RESTRO_LIST;
    const option = {
        method: api.method,
        url: api.url
    };

    return dispatch =>
        AjaxFactory.triggerServerRequest(option)
            .then((value) => {
                const data = (value.body && value.body.data) || null;
                const success = (data && value.body.data.success) || null;
                const message = (data && value.body.data.message) || null;
                if (success) {
                    const { restaurants } = (data && data.data) || {};
                    Promise.all([
                        dispatch(ajaxRequestSuccess()),
                        dispatch(setRestroList(restaurants))
                    ]);
                } else {
                    dispatch(ajaxRequestFailure({ message }));
                }
            })
            .catch((error) => {
                console.log(error);
                dispatch(ajaxRequestFailure({ message: error }));
            });
};

export const getRestro = (restroID) => {
    const api = expressConstants.GET_RESTRO;
    const option = {
        method: api.method,
        url: `${api.url}/${restroID}`
    };
    return dispatch =>
        AjaxFactory.triggerServerRequest(option)
            .then((value) => {
                const data = (value.body && value.body.data) || null;
                const success = (data && data.success) || null;
                const message = (data && data.message) || null;
                const restroDetails = (success && data.data) || [];
                if (success) {
                    dispatch(ajaxRequestSuccess());
                    dispatch(setInitialRestroDetails(restroDetails));
                } else {
                    dispatch(ajaxRequestFailure({ message }));
                }
            })
            .catch((error) => {
                console.log(error);
                dispatch(ajaxRequestFailure({ message: error }));
            });
};

export const updateRestro = (formData) => {
    const api = expressConstants.UPDATE_RESTRO;
    const option = {
        method: api.method,
        url: api.url,
        data: formData
    };

    return dispatch =>
        AjaxFactory.triggerServerRequest(option)
            .then((value) => {
                console.log(value);
                const data = (value.body && value.body.data) || null;
                const success = (data && data.success) || null;
                const message = (data && data.message) || null;
                if (success) {
                    const result = success && data.data;
                    const successMsg = `${
                        result.restaurantName
                    } is updated successfully`;
                    dispatch(ajaxRequestSuccess());
                    dispatch(
                        restroSuccessMsg({
                            msg: successMsg,
                            infoType: 'success'
                        })
                    );
                } else {
                    dispatch(ajaxRequestFailure({ message }));
                }
            })
            .catch((error) => {
                console.log(error);
                dispatch(ajaxRequestFailure({ message: error }));
            });
};
