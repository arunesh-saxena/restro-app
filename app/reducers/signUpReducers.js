export default function signUp(state = {}, action) {
    switch (action.type) {
        case 'signUp': {
            return Object.assign({}, state, {
                user: action.data
            });
        }
        default: {
            return state;
        }
    }
}
