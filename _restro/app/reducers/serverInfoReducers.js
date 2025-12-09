import * as types from '../utils/types';

const serverInfo = (state = { ajaxRequestStatus: null }, action) => {
    switch (action.type) {
        case types.AJAX_REQUEST_FAILURE: {
            return Object.assign({}, state, {
                ajaxRequestStatus: 'failure',
                data: action.data
            });
        }
        case types.AJAX_REQUEST_SUCCESS: {
            return Object.assign({}, state, {
                ajaxRequestStatus: 'success',
                data: action.data
            });
        }
        case types.AJAX_REQUEST_REST: {
            return Object.assign({}, state, {
                ajaxRequestStatus: null,
                data: null
            });
        }
        default:
            return state;
    }
};

export default serverInfo;
