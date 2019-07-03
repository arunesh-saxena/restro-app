import AjaxFactory from '../utils/AjaxFactory';
import expressConstants from '../appConstants/expressEndPoint';
import * as types from '../utils/types';
import { ajaxRequestSuccess, ajaxRequestFailure } from './serverInfoAction';

export const setMenuList = data => ({
    type: types.MENU_LIST,
    data
});
export const setMenuItem = data => ({
    type: types.MENU_ITEM,
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
export const uploadMenuAction = (formData) => {
    const api = expressConstants.UPLOAD_MENU;
    const option = {
        method: api.method,
        url: api.url,
        data: formData
    };
    return dispatch =>
        AjaxFactory.triggerServerRequest(option)
            .then((value) => {
                const data = (value.body && value.body.data) || null;
                const success = (data && data.success) || null;
                const message = (data && data.message) || null;
                if (success) {
                    const result = data.data;
                    dispatch(
                        ajaxRequestSuccess({
                            message: `${result.itemName} uploaded successfully`
                        })
                    );
                } else {
                    dispatch(ajaxRequestFailure({ message }));
                }
            })
            .catch((error) => {
                console.log(error);
            });
};

export const getMenuList = () => {
    const api = expressConstants.MENU_LIST;
    const option = {
        method: api.method,
        url: api.url
    };
    return dispatch =>
        AjaxFactory.triggerServerRequest(option)
            .then((value) => {
                const data = (value.body && value.body.data) || null;
                const success = (data && data.success) || null;
                const message = (data && data.message) || null;
                const list = (success && value.body.data.data) || [];
                if (success) {
                    dispatch(ajaxRequestSuccess());
                    dispatch(setMenuList(list));
                    dispatch(setMenuItemFilter(list));
                } else {
                    dispatch(ajaxRequestFailure({ message }));
                }
            })
            .catch((error) => {
                console.log(error);
                dispatch(ajaxRequestFailure({ message: error }));
            });
};

export const getMenuItem = (itemID) => {
    const api = expressConstants.MENU_ITEM;
    const option = {
        method: api.method,
        url: `${api.url}/${itemID}`
    };
    return dispatch =>
        AjaxFactory.triggerServerRequest(option)
            .then((value) => {
                const data = (value.body && value.body.data) || null;
                const success = (data && data.success) || null;
                const message = (data && data.message) || null;
                if (success) {
                    const item = data.data || [];
                    dispatch(ajaxRequestSuccess());
                    dispatch(setInitialMenuItem(item));
                } else {
                    dispatch(ajaxRequestFailure({ message }));
                }
            })
            .catch((error) => {
                console.log(error);
                dispatch(ajaxRequestFailure({ message: error }));
            });
};

export const updateMenuItem = (formData) => {
    const api = expressConstants.MENU_ITEM_UPDATE;
    const option = {
        method: api.method,
        url: api.url,
        data: formData
    };

    return dispatch =>
        AjaxFactory.triggerServerRequest(option)
            .then((value) => {
                const data = (value.body && value.body.data) || null;
                const success = (data && data.success) || null;
                const message = (data && data.message) || null;
                if (success) {
                    const result = data.data;
                    dispatch(
                        ajaxRequestSuccess({
                            message: `${result.itemName} uploaded successfully`
                        })
                    );
                } else {
                    dispatch(ajaxRequestFailure({ message }));
                }
            })
            .catch((error) => {
                console.log(error);
                dispatch(ajaxRequestFailure({ message: error }));
            });
};

export const changeMenuItemQuantity = (itemData) => {
    const api = expressConstants.MENU_ITEM_QUANITY_CHANGE;
    const option = {
        method: api.method,
        url: api.url,
        data: itemData
    };
    return dispatch =>
        AjaxFactory.triggerServerRequest(option)
            .then((value) => {
                const data = (value.body && value.body.data) || null;
                const success = (data && data.success) || null;
                const message = (data && data.message) || null;
                if (success) {
                    const result = data.data;
                    dispatch(
                        ajaxRequestSuccess({
                            message: 'Quantity updated successfully'
                        })
                    );
                    dispatch(getMenuList());
                } else {
                    dispatch(ajaxRequestFailure({ message }));
                }
            })
            .catch((error) => {
                console.log(error);
                dispatch(ajaxRequestFailure({ message: error }));
            });
};

export const toggleHiddenMenuItem = (itemData) => {
    const api = expressConstants.MENU_ITEM_TOGGLE_HIDDEN;
    const option = {
        method: api.method,
        url: api.url,
        data: itemData
    };
    return dispatch =>
        AjaxFactory.triggerServerRequest(option)
            .then((value) => {
                const data = (value.body && value.body.data) || null;
                const success = (data && data.success) || null;
                const message = (data && data.message) || null;
                if (success) {
                    const result = data.data;
                    dispatch(
                        ajaxRequestSuccess({
                            message: `${
                                result.itemName
                            } hidden updated sucessfully`
                        })
                    );
                    dispatch(getMenuList());
                } else {
                    dispatch(ajaxRequestFailure({ message }));
                }
            })
            .catch((error) => {
                console.log(error);
                dispatch(ajaxRequestFailure({ message: error }));
            });
};
