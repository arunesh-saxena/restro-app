import * as types from '../utils/types';

export default function menu(
    state = {},
    action
) {
    switch (action.type) {
        case types.UPLOAD_MENU: {
            return Object.assign({}, state, {
                menu: action.data
            });
        }
        default: {
            return state;
        }
    }
}
