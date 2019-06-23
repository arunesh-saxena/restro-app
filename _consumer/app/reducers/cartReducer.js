import * as types from '../utils/types';

export default function cart(state = { order: [] }, action) {
    switch (action.type) {
        case types.ADD_TO_CART: {
            const preOrder = state.order; // copy the order lsit
            let order = preOrder.find(
                (item, ind) => item.itemId === action.data.itemId
            );
            if (order) {
                order.quantity += action.data.quantity; // modify the old order list
                return Object.assign({}, state, {
                    order: [...state.order]
                });
            }
            order = action.data;
            return Object.assign({}, state, {
                order: [...state.order, order]
            });
        }
        case types.SET_PLACED_ORDER: {
            return Object.assign({}, state, {
                placedOrder: action.data
            });
        }
        default: {
            return state;
        }
    }
}
