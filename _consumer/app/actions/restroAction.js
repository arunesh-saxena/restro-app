import AjaxFactory from '../utils/AjaxFactory';
import expressConstants from '../appConstants/expressEndPoint';
import { ajaxRequestSuccess, ajaxRequestFailure } from './serverInfoAction';
import * as types from '../utils/types';

export const setRestro = data => ({
    type: types.RESTRO_LIST,
    data
});
export const setRestroOrders = data => ({
    type: types.RESTRO_ORDERS,
    data
});

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
                        dispatch(setRestro(restaurants))
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

export const getRestroOrders = (restroCode) => {
    const api = expressConstants.GET_RESTRO_ORDERS;
    const option = {
        method: api.method,
        url: api.url,
        data: {
            restroCode
        }
    };

    return dispatch =>
        AjaxFactory.triggerServerRequest(option)
            .then((value) => {
                const data = (value.body && value.body.data) || null;
                const success = (data && value.body.data.success) || null;
                const message = (data && value.body.data.message) || null;
                if (success) {
                    const { orders } = (data && data.data) || {};
                    Promise.all([
                        dispatch(ajaxRequestSuccess()),
                        dispatch(setRestroOrders(orders))
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
