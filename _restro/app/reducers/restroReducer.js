import * as types from '../utils/types';

export default function app(
    state = { infoType: null, msg: null, restroList: [] },
    action
) {
    switch (action.type) {
        case types.SUCCESS_MSG: {
            return Object.assign({}, state, {
                msg: action.data.msg,
                infoType: action.data.infoType
            });
        }
        case types.RESTRO_LIST: {
            return Object.assign({}, state, {
                restroList: action.data
            });
        }
        default: {
            return state;
        }
    }
}
