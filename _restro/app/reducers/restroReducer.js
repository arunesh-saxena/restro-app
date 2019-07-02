import * as types from '../utils/types';

export default function app(
    state = { infoType: null, msg: null, restroList: [] },
    action
) {
    switch (action.type) {
        case types.RESTRO_LIST: {
            return Object.assign({}, state, {
                restroList: action.data
            });
        }
        case types.RESTRO_INITIAL_DETAILS: {
            return Object.assign({}, state, {
                restroInitialDetials: action.data
            });
        }
        default: {
            return state;
        }
    }
}
