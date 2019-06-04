import AjaxFactory from '../utils/AjaxFactory';
import expressConstants from '../appConstants/expressEndPoint';
import appUrls from '../appConstants/appUrls';
import { setLoginDataStatus } from './loginAction';

export const logOutAction = props => {
    const api = expressConstants.LOGOUT;
    const option = {
        method: api.method,
        url: api.url,
    };
    return dispatch => {
        AjaxFactory.triggerServerRequest(option)
            .then(res => {
                const { success, message } = res.body.data;
                document.cookie = `_token=;expires=Thu, 18 Dec 2013 12:00:00 UTC; path=/`;
                if (success) {
                    dispatch(
                        setLoginDataStatus({ username: null, msg: message })
                    );
                    props.history.push(appUrls.LOGIN);
                } else {
                    console.log(res);
                }
            })
            .catch(error => {
                console.log(error);
            });
    };
};
