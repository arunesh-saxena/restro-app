import * as types from '../utils/types';

export default function menu(
    state = {},
    action
) {
    switch (action.type) {
        case types.UPLOAD_MENU: {
            return Object.assign({}, state, {
                menuUpload: action.data
            });
        }
        case types.MENU_LIST: {
            return Object.assign({}, state, {
                menuList: action.data
            });
        }
        default: {
            return state;
        }
    }
}
