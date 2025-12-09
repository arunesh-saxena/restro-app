import * as types from '../utils/types';

const order = (state = {}, action) => {
    switch (action.type) {
        case types.SET_ORDER_LIST: {
            return Object.assign({}, state, {
                orders: action.data
            });
        }
        default: {
            return state;
        }
    }
};

export default order;
