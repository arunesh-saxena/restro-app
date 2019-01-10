export default function app(state = {}, action) {
    switch (action.type) {
        case 'SET_LANGUAGE': {
            return Object.assign({}, state, {
                language: action.data
            });
        }
        default: {
            return state;
        }
    }
}
