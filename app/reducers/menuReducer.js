import * as types from '../utils/types';

export default function menu(state = {}, action) {
    switch (action.type) {
        case types.UPLOAD_MENU: {
            return Object.assign({}, state, {
                menuUpload: action.data,
            });
        }
        case types.MENU_LIST: {
            return Object.assign({}, state, {
                menuList: action.data,
            });
        }
        case types.MENU_LIST_FILTERED: {
            return Object.assign({}, state, {
                menuListFiltered: action.data,
            });
        }
        case types.MENU_ITEM: {
            return Object.assign({}, state, {
                menuItem: action.data,
            });
        }
        case types.MENU_INITIAL_ITEM: {
            return Object.assign({}, state, {
                menuInitialItem: action.data,
            });
        }
        default: {
            return state;
        }
    }
}
