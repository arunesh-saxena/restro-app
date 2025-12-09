import AjaxFactory from '../utils/AjaxFactory';
import expressConstants from '../appConstants/expressEndPoint';
import * as types from '../utils/types';

export const setMenuList = data => ({
    type: types.MENU_LIST,
    data
});

export const setInitialMenuItem = data => ({
    type: types.MENU_INITIAL_ITEM,
    data
});

export const setMenuItemFilter = data => ({
    type: types.MENU_LIST_FILTERED,
    data
});

export const getMenuList = () => {
    const api = expressConstants.MENU_LIST;
    const option = {
        method: api.method,
        url: api.url
    };
    return dispatch =>
        AjaxFactory.triggerServerRequest(option)
            .then((value) => {
                const success =
                    (value.body &&
                        value.body.data &&
                        value.body.data.success) ||
                    null;
                const message =
                    (value.body &&
                        value.body.data &&
                        value.body.data.message) ||
                    null;
                const list = (success && value.body.data.data) || [];
                Promise.all([dispatch(setMenuList(list))]);
            })
            .catch((error) => {
                console.log(error);
            });
};
