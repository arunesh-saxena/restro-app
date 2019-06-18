import * as types from '../utils/types';

const errors = (state = { ajaxRequestStatus: 'success' }, action) => {
    switch (action.type) {
        case types.AJAX_REQUEST_FAILURE: {
            return Object.assign({}, state, {
                ajaxRequestStatus: 'failure',
                data: action.data
            });
        }
        case types.AJAX_REQUEST_SUCCESS: {
            return Object.assign({}, state, {
                ajaxRequestStatus: 'success'
            });
        }
        default:
            return state;
    }
};

export default errors;
