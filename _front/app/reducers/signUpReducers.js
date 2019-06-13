import * as types from '../utils/types';

export default function signUp(state = {}, action) {
    switch (action.type) {
        case types.SIGN_UP: {
            return Object.assign({}, state, {
                user: action.data
            });
        }
        default: {
            return state;
        }
    }
}
