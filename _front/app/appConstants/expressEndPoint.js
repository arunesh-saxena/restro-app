import { UPLOAD_MENU } from '../utils/types';

const expressConstants = {
    TEST_API: {
        url: '/testApi',
        method: 'GET'
    },
    SIGN_UP: {
        url: '/signup',
        method: 'POST'
    },
    LOGIN: {
        url: '/login',
        method: 'POST'
    },
    LOGOUT: {
        url: '/logout',
        method: 'POST'
    },
    ISLOGIN: {
        url: '/isLogin',
        method: 'POST'
    },
    UPLOAD_MENU: {
        url: '/UPLOAD_MENU',
        method: 'POST'
    },
    MENU_LIST: {
        url: '/MENU_LIST',
        method: 'POST'
    },
    MENU_ITEM: {
        url: '/MENU_ITEM',
        method: 'GET'
    },
    MENU_ITEM_UPDATE: {
        url: '/MENU_ITEM_UPDATE',
        method: 'POST'
    },
    MENU_ITEM_QUANITY_CHANGE: {
        url: '/MENU_ITEM_QUANITY_CHANGE',
        method: 'POST'
    },
    MENU_ITEM_TOGGLE_HIDDEN: {
        url: '/MENU_ITEM_TOGGLE_HIDDEN',
        method: 'POST'
    },
    MENU_ITEM_DELETE: {
        url: '/MENU_ITEM_DELETE',
        method: 'POST'
    }
};

export default expressConstants;
