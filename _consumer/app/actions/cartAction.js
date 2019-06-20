import AjaxFactory from '../utils/AjaxFactory';
import expressConstants from '../appConstants/expressEndPoint';
import * as types from '../utils/types';

export const addToCart = data => ({
    type: types.ADD_TO_CART,
    data
});

export const placeOrder = (orderData) => {
    const api = expressConstants.MENU_LIST;
    const option = {
        method: api.method,
        url: api.url
    };
    return dispatch => ({
        type: 'orderPlaced',
        data: 'orderdata'
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
