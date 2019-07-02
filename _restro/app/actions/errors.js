import * as types from '../utils/types';

export const ajaxRequestSuccess = data => ({
    type: types.AJAX_REQUEST_SUCCESS,
    data
});

export const ajaxRequestFailure = data => ({
    type: types.AJAX_REQUEST_FAILURE,
    data
});
