import AjaxFactory from '../utils/AjaxFactory';
import expressConstants from '../appConstants/expressEndPoint';
import * as types from '../utils/types';
import { ajaxRequestSuccess, ajaxRequestFailure } from './serverInfoAction';

export const setAccountInfo = data => ({
    type: types.SET_ACCOUNT_INFO,
    data
});

export const setAccountRestro = data => ({
    type: types.SET_ACCOUNT_RESTRO,
    data
});

export const getAccountInfo = (params, url, headers, res) => {};

export const getUserResautants = (userName) => {
    const api = expressConstants.GET_USER_RESTRO;
    const option = {
        method: api.method,
        url: api.url,
        data: {
            userName
        }
    };
    return dispatch =>
        AjaxFactory.triggerServerRequest(option)
            .then((value) => {
                const data = (value.body && value.body.data) || null;
                const success = (data && data.success) || null;
                const message = (data && data.message) || null;
                if (success) {
                    const result = data.data || [];
                    Promise.all([
                        dispatch(setAccountRestro(result.restaurants || [])),
                        dispatch(ajaxRequestSuccess())
                    ]);
                } else {
                    dispatch(ajaxRequestFailure({ message }));
                }
            })
            .catch((error) => {
                console.log(error);
                dispatch(ajaxRequestFailure({ message: error }));
            });
};
