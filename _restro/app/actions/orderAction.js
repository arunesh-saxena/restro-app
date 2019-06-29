import AjaxFactory from '../utils/AjaxFactory';
import expressConstants from '../appConstants/expressEndPoint';
import * as types from '../utils/types';
import appUrls from '../appConstants/appUrls';
import { ajaxRequestSuccess, ajaxRequestFailure } from './errors';

export const setOrderList = data => ({
    type: types.SET_ORDER_LIST,
    data
});

export const getOrderList = () => {
    const api = expressConstants.ORDER_LIST;
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
                const list = (success && data.data) || [];
                if (success) {
                    dispatch(ajaxRequestSuccess());
                    dispatch(setOrderList(list.orders));
                } else {
                    dispatch(ajaxRequestFailure({ message }));
                }
            })
            .catch((error) => {
                console.log(error);
                dispatch(ajaxRequestFailure({ message: error }));
            });
};

export const updateOrder = ({ tokenId, actionId }) => {
    const api = expressConstants.UPDATE_ORDER_ACTION;
    const option = {
        method: api.method,
        url: api.url,
        data: { tokenId, actionId }
    };
    console.log(option);
    return dispatch =>
        AjaxFactory.triggerServerRequest(option)
            .then((value) => {
                console.log(value);
                const data = (value.body && value.body.data) || null;
                const success = (data && value.body.data.success) || null;
                const message = (data && value.body.data.message) || null;
                const order = (success && data.data) || [];
                console.log(order);

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
