const commonUtil = {
    setCookie(cname, cvalue, expiredays) {
        const d = new Date();
        d.setTime(d.getTime() + expiredays * 24 * 60 * 60 * 1000);
        const expires = `expires=${d.toUTCString()}`;
        if (typeof document === 'undefined') {
            return null;
        }
        document.cookie = `${cname}=${cvalue};${expires};path=/`;
    },
    splitCookies(rc) {
        const list = {};
        rc &&
            rc.split(';').forEach((cookie) => {
                const parts = cookie.split('=');
                list[parts.shift().trim()] = decodeURI(parts.join('='));
            });
        return list;
    },
    parseCookies(request) {
        const rc =
            (request && request.headers && request.headers.cookie) ||
            (typeof request === 'string' && request) ||
            null;
        return this.splitCookies(rc);
    },
    getDate(ISODate) {
        const d = new Date(ISODate);
        const min = ISODate.split(':')[1];
        const finalData = `${d.getDate()}/${d.getMonth()}/${d.getFullYear()} ${d.getHours()}:${min}`;
        return finalData;
    }
};
export default commonUtil;
