import React from 'react';
import Loadable from 'react-loadable';
import AppUrls from './appConstants/appUrls';
import App from './pages/App';

const HomePage = Loadable({
    loader: () => import(/* webpackChunkName: "HomePage" */ './pages/HomePage'),
    loading: () => <strong>Loading...</strong>
});

export default store => [
    {
        path: AppUrls.ROOT,
        component: App,
        need: [],
        routes: [
            {
                path: AppUrls.ROOT,
                exact: true,
                component: HomePage
            },
            {
                path: AppUrls.HOME,
                exact: true,
                component: HomePage
            },
            {
                path: AppUrls.ABOUT_US,
                exact: false,
                component: Loadable({
                    loader: () =>
                        import(
                            /* webpackChunkName: "AboutusPage" */ './pages/AboutUsPage'
                        ),
                    loading: () => <strong>Loading...</strong>
                }),
                routes: [
                    {
                        path: AppUrls.CONTACT_US,
                        exact: true,
                        component: Loadable({
                            loader: () =>
                                import(
                                    /* webpackChunkName: "ContactUsPage" */ './pages/ContactUsPage'
                                ),
                            loading: () => <strong>Loading...</strong>
                        })
                    }
                ]
            },
            {
                path: '*',
                exact: false,
                component: Loadable({
                    loader: () =>
                        import(
                            /* webpackChunkName: "ErrorPage" */ './pages/ErrorPage'
                        ),
                    loading: () => <strong>Loading...</strong>
                })
            }
        ]
    }
];
