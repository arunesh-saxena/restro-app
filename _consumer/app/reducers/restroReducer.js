import * as types from '../utils/types';

const restro = (state = { restaurants: [] }, action) => {
    switch (action.type) {
        case types.RESTRO_LIST: {
            return Object.assign({}, state, {
                restaurants: action.data
            });
        }
        case types.SET_ACTIONS_LIST: {
            return Object.assign({}, state, {
                actions: action.data || []
            });
        }
        default: {
            return state;
        }
    }
};

export default restro;
