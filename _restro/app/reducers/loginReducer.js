import * as types from '../utils/types';

const login = (state = {}, action) => {
    switch (action.type) {
        case types.SET_LOGIN_DATA_STATUS: {
            return Object.assign({}, state, {
                isLogin: !!action.data.username,
                username: action.data.username,
                errorMsg: action.data.msg
            });
        }
        case types.SET_LOGIN_ERROR_MSG: {
            return Object.assign({}, state, {
                errorMsg: action.data.msg
            });
        }

        default: {
            return state;
        }
    }
};

export default login;
