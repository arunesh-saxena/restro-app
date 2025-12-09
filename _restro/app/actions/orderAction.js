import AjaxFactory from '../utils/AjaxFactory';
import expressConstants from '../appConstants/expressEndPoint';
import * as types from '../utils/types';
import { ajaxRequestSuccess, ajaxRequestFailure } from './serverInfoAction';

export const setOrderList = data => ({
    type: types.SET_ORDER_LIST,
    data
});

export const getOrderList = (callBack) => {
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
                    if (callBack && typeof callBack === 'function') {
                        callBack();
                    }
                } else {
                    dispatch(ajaxRequestFailure({ message }));
                }
            })
            .catch((error) => {
                console.log(error);
                dispatch(ajaxRequestFailure({ message: error }));
            });
};

export const updateOrder = ({ tokenId, actionId }, callBack) => {
    const api = expressConstants.UPDATE_ORDER_ACTION;
    const option = {
        method: api.method,
        url: api.url,
        data: { tokenId, actionId }
    };

    return dispatch =>
        AjaxFactory.triggerServerRequest(option)
            .then((value) => {
                const data = (value.body && value.body.data) || null;
                const success = (data && value.body.data.success) || null;
                const message = (data && value.body.data.message) || null;
                if (success) {
                    const order = data.data || {};
                    dispatch(
                        ajaxRequestSuccess({
                            message: `Order: Token# ${
                                order.order.tokenId
                            } action change to ${order.order.orderStatus}`
                        })
                    );
                    if (callBack && typeof callBack === 'function') {
                        callBack(order.order);
                    }
                } else {
                    dispatch(ajaxRequestFailure({ message }));
                }
            })
            .catch((error) => {
                console.log(error);
                dispatch(ajaxRequestFailure({ message: error }));
            });
};
