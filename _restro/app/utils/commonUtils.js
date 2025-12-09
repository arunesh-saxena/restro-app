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
    },

    /**
     * [parseQueryString get all query parameters in key value format]
     * @param  {[string]} url [url string of query parameters]
     * @return {[json object]}     [json object in key value format]
     * /^.*\?/
     * /([^\=]+)\=([^\&]*)\&?/g
     */
    parseQueryString(url) {
        // parse query string into key/value pairs and return as object
        const query = {};
        if (!url) {
            return '';
        }
        url.replace(/^.*\?/, '').replace(
            /([^=]+)=([^&]*)&?/g,
            (match, key, value) => {
                // value = decodeURIComponent(value);
                // value = value.split('|');
                query[key] = decodeURIComponent(value);
                return '';
            }
        );
        return query;
    }
};
export default commonUtil;
