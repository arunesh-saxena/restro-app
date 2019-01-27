
import * as types from '../utils/types';
export default function app(state = {}, action) {
    switch (action.type) {
        case types.SET_LANGUAGE: {
            return Object.assign({}, state, {
                language: action.data
            });
        }
        default: {
            return state;
        }
    }
}
