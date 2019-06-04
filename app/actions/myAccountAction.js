import AjaxFactory from '../utils/AjaxFactory';
import expressConstants from '../appConstants/expressEndPoint';
import * as types from '../utils/types';

export const setAccountInfo = data => ({
    type: types.SET_ACCOUNT_INFO,
    data,
});

export const getAccountInfo = (params, url, headers, res) => {};
