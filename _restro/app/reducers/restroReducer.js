import * as types from '../utils/types';

export default function app(state = { infoType: null, msg: null }, action) {
    switch (action.type) {
        case types.SUCCESS_MSG: {
            return Object.assign({}, state, {
                msg: action.data.msg,
                infoType: action.data.infoType
            });
        }
        default: {
            return state;
        }
    }
}
