const commonUtil = {
    setCookie(cname, cvalue, expiredays) {
        const d = new Date();
        d.setTime(d.getTime() + expiredays * 24 * 60 * 60 * 1000);
        const expires = `expires=${d.toUTCString()}`;
        if (typeof document === 'undefined') {
            return null;
        }
        document.cookie = `${cname}=${cvalue};${expires};path=/`;
    }
};
export default commonUtil;
