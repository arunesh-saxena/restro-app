import * as types from '../utils/types';

export default function app(state = {}, action) {
    switch (action.type) {
        case types.RESTRO_ORDERS: {
            return Object.assign({}, state, {
                restroOrders: action.data
            });
        }
        default: {
            return state;
        }
    }
}
