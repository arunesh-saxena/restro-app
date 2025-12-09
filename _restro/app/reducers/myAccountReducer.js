import * as types from '../utils/types';

export default function myAccount(state = {}, action) {
    switch (action.type) {
        case types.SET_ACCOUNT_INFO: {
            return Object.assign({}, state, {
                details: action.data
            });
        }
        case types.SET_ACCOUNT_RESTRO: {
            return Object.assign({}, state, {
                restaurants: action.data || []
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
}
