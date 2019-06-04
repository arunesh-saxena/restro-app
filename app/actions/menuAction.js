import AjaxFactory from '../utils/AjaxFactory';
import expressConstants from '../appConstants/expressEndPoint';
import * as types from '../utils/types';

export const setMenuUploadAction = data => ({
  type: types.UPLOAD_MENU,
  data,
});
export const setMenuList = data => ({
  type: types.MENU_LIST,
  data,
});
export const setMenuItem = data => ({
  type: types.MENU_ITEM,
  data,
});
export const setInitialMenuItem = data => ({
  type: types.MENU_INITIAL_ITEM,
  data,
});
export const uploadMenuAction = formData => {
  const api = expressConstants.UPLOAD_MENU;
  const option = {
    method: api.method,
    url: api.url,
    data: formData,
  };
  return dispatch =>
    AjaxFactory.triggerServerRequest(option)
      .then(value => {
        const success =
          (value.body && value.body.data && value.body.data.success) || null;
        const message =
          (value.body && value.body.data && value.body.data.message) || null;
        const data = success && value.body.data.data;
        if (success) {
          dispatch(
            setMenuUploadAction({
              success,
              msg: `${data.itemName} uploaded successfully`,
            })
          );
        } else {
          dispatch(
            setMenuUploadAction({
              success,
              msg: success ? message : message.message,
            })
          );
        }
      })
      .catch(error => {
        console.log(error);
      });
};

export const getMenuList = () => {
  const api = expressConstants.MENU_LIST;
  const option = {
    method: api.method,
    url: api.url,
  };
  return dispatch =>
    AjaxFactory.triggerServerRequest(option)
      .then(value => {
        const success =
          (value.body && value.body.data && value.body.data.success) || null;
        const message =
          (value.body && value.body.data && value.body.data.message) || null;
        const list = (success && value.body.data.data) || [];
        dispatch(setMenuList(list));
        dispatch(setMenuItemFilter(list));
      })
      .catch(error => {
        console.log(error);
      });
};

export const getMenuItem = itemID => {
  const api = expressConstants.MENU_ITEM;
  const option = {
    method: api.method,
    url: `${api.url}/${itemID}`,
  };
  return dispatch =>
    AjaxFactory.triggerServerRequest(option)
      .then(value => {
        const success =
          (value.body && value.body.data && value.body.data.success) || null;
        const message =
          (value.body && value.body.data && value.body.data.message) || null;
        const list = (success && value.body.data.data) || [];
        dispatch(setInitialMenuItem(list));
      })
      .catch(error => {
        console.log(error);
      });
};
export const setMenuItemFilter = data => {
  return {
    type: types.MENU_LIST_FILTERED,
    data,
  };
};

export const updateMenuItem = formData => {
  const api = expressConstants.MENU_ITEM_UPDATE;
  const option = {
    method: api.method,
    url: api.url,
    data: formData,
  };

  return dispatch =>
    AjaxFactory.triggerServerRequest(option)
      .then(value => {
        const success =
          (value.body && value.body.data && value.body.data.success) || null;
        const message =
          (value.body && value.body.data && value.body.data.message) || null;
        const data = success && value.body.data.data;
        if (success) {
          dispatch(
            setMenuUploadAction({
              success,
              msg: `${data.itemName} uploaded successfully`,
            })
          );
        } else {
          dispatch(
            setMenuUploadAction({
              success,
              msg: success ? message : message.message,
            })
          );
        }
      })
      .catch(error => {
        console.log(error);
      });
};

export const changeMenuItemQuantity = itemData => {
  const api = expressConstants.MENU_ITEM_QUANITY_CHANGE;
  const option = {
    method: api.method,
    url: api.url,
    data: itemData,
  };
  return dispatch =>
    AjaxFactory.triggerServerRequest(option)
      .then(value => {
        const success =
          (value.body && value.body.data && value.body.data.success) || null;
        const message =
          (value.body && value.body.data && value.body.data.message) || null;
        const data = success && value.body.data.data;
        if (success) {
          dispatch(getMenuList());
        } else {
          console.log(value);
        }
      })
      .catch(error => {
        console.log(error);
      });
};

export const toggleHiddenMenuItem = data => {
  const api = expressConstants.MENU_ITEM_TOGGLE_HIDDEN;
  const option = {
    method: api.method,
    url: api.url,
    data,
  };
  return dispatch =>
    AjaxFactory.triggerServerRequest(option)
      .then(value => {
        const success =
          (value.body && value.body.data && value.body.data.success) || null;
        const message =
          (value.body && value.body.data && value.body.data.message) || null;
        const data = success && value.body.data.data;
        if (success) {
          dispatch(getMenuList());
        } else {
          console.log(12, value);
        }
      })
      .catch(error => {
        console.log(error);
      });
};
