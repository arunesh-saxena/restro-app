import * as types from '../utils/types';

export default function login(state = {}, action) {
    switch (action.type) {
        case types.SET_LOGIN_DATA_STATUS: {
            return Object.assign({}, state, {
                loginStatus: action.data
            });
        }

        default: {
            return state;
        }
    }
}
