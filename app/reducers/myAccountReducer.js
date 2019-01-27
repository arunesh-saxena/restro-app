import * as types from '../utils/types';

export default function myAccount(state = {}, action) {
    switch (action.type) {
        case types.SET_ACCOUNT_INFO: {
            // const editedData = { ...action.data };
            // delete editedData.token;
            // return Object.assign({}, state, editedData);
            return Object.assign({}, state, action.data);
        }
        default: {
            return state;
        }
    }
}
