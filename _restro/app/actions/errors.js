import * as types from '../utils/types';

export const ajaxRequestSuccess = () => ({
    type: types.AJAX_REQUEST_SUCCESS
});

export const ajaxRequestFailure = data => ({
    type: types.AJAX_REQUEST_FAILURE,
    data
});
