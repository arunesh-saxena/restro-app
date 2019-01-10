export default function cart(
    state = {},
    action
) {
    switch (action.type) {
        case 'ADD_TO_CART': {
            return Object.assign({}, state, {
                cart: action.data
            });
        }
        default: {
            return state;
        }
    }
}
