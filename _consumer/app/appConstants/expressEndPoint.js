import { UPLOAD_MENU } from '../utils/types';

const expressConstants = {
    TEST_API: {
        url: '/testApi',
        method: 'GET'
    },
    MENU_LIST: {
        url: '/menu_list',
        method: 'POST'
    },
    MENU_ITEM: {
        url: '/menu_item',
        method: 'GET'
    },
    MENU_ITEM_QUANTITY_CHANGE: {
        url: '/menu_item_quantity_change',
        method: 'POST'
    },
    CART: {
        url: '/CART',
        method: 'POST'
    },
    PLACE_ORDER: {
        url: '/placeOrder',
        method: 'POST'
    },
    ORDER_STATUS: {
        url: '/ordeStatus',
        method: 'GET'
    }
};

export default expressConstants;
