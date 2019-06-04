const preRenderMiddleware = (dispatch, branch, req, res) => {
    const promises = [];
    const promisesArray = branch.map(({ route, match }) => {
        if (typeof route.need != 'undefined') {
            // return dispatch(route.need[0](req.headers, res))
            return route.need.map(need => {
                promises.push(dispatch(need(req.headers, res)));
            });
        }
    });

    return Promise.all(promises);
};

export default preRenderMiddleware;
