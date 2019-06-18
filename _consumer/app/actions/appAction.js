import AjaxFactory from '../utils/AjaxFactory';
import expressConstants from '../appConstants/expressEndPoint';
import commonUtils from '../utils/commonUtils';
import * as types from '../utils/types';

export const setLanguage = data => ({
    type: types.SET_LANGUAGE,
    data
});
