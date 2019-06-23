import AjaxFactory from '../utils/AjaxFactory';
import expressConstants from '../appConstants/expressEndPoint';
import * as types from '../utils/types';
import { ajaxRequestSuccess, ajaxRequestFailure } from './errors';
import appUrls from '../appConstants/appUrls';

export const addToCart = data => ({
    type: types.ADD_TO_CART,
    data
});

const setPlacedOrder = data => ({
    type: types.SET_PLACED_ORDER,
    data
});

export const placeOrder = (orderData, props = null) => {
    const api = expressConstants.PLACE_ORDER;
    const option = {
        method: api.method,
        url: api.url,
        data: orderData
    };

    return dispatch =>
        AjaxFactory.triggerServerRequest(option)
            .then((value) => {
                console.log(value);
                const data = (value.body && value.body.data) || null;
                const success = (data && data.success) || null;
                const message = (data && data.message) || null;

                if (success) {
                    dispatch(ajaxRequestSuccess());
                    const orderDetails = data.data;
                    if (props) {
                        props.history.push(
                            `${appUrls.order_status}?tokenId=${orderDetails.tokenId}`
                        );
                    }
                } else {
                    dispatch(ajaxRequestFailure({ message }));
                }
            })
            .catch((error) => {
                console.log(error);
                const message =
                    (error.body &&
                        error.body.data &&
                        error.body.data.message) ||
                    null;
                ajaxRequestFailure({ message });
            });
};

export const getOrderStatus = ({ tokenId }) => {
    const api = expressConstants.ORDER_STATUS;
    const option = {
        method: api.method,
        url: `${api.url}?tokenId=${tokenId}`
    };

    return dispatch =>
        AjaxFactory.triggerServerRequest(option)
            .then((value) => {
                const data = (value.body && value.body.data) || null;
                const success = (data && data.success) || null;
                const message = (data && data.message) || null;

                if (success) {
                    const orderDetails = data.data.order;
                    dispatch(setPlacedOrder(orderDetails));
                    dispatch(ajaxRequestSuccess());
                } else {
                    ajaxRequestFailure({ message });
                }
            })
            .catch((error) => {
                console.log(error);
                const message =
                    (error.body &&
                        error.body.data &&
                        error.body.data.message) ||
                    null;
                ajaxRequestFailure({ message });
            });
};

/* export const getCart = () => {
    const api = expressConstants.MENU_LIST;
    const option = {
        method: api.method,
        url: api.url
    };
    return dispatch =>
        AjaxFactory.triggerServerRequest(option)
            .then((value) => {})
            .catch((error) => {
                console.log(error);
            });
}; */
