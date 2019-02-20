import React from 'react';
import Loadable from 'react-Loadable';
import AppUrls from './appConstants/appUrls';
import App from './pages/App';

const HomePage = Loadable({
    loader: () => import(/* webpackChunkName: "HomePage" */ './pages/HomePage'),
    loading: () => <strong>Loading...</strong>,
});

export default [
    {
        path: AppUrls.ROOT,
        component: App,
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
                    loader: () => import(/* webpackChunkName: "AboutusPage" */ './pages/AboutUsPage'),
                    loading: () => <strong>Loading...</strong>,
                }),
                routes: [
                    {
                        path: AppUrls.CONTACT_US,
                        exact: true,
                        component: Loadable({
                            loader: () => import(/* webpackChunkName: "ContactUsPage" */ './pages/ContactUsPage'),
                            loading: () => <strong>Loading...</strong>,
                        })
                    }
                ]
            },
            {
                path: AppUrls.LOGIN,
                exact: true,
                component: Loadable({
                    loader: () => import(/* webpackChunkName: "LoginPage" */ './pages/login/LoginPage'),
                    loading: () => <strong>Loading...</strong>,
                })
            },
            {
                path: AppUrls.SIGN_UP,
                exact: true,
                component: Loadable({
                    loader: () => import(/* webpackChunkName: "SignUpPage" */ './pages/signUp/SignUpPage'),
                    loading: () => <strong>Loading...</strong>,
                })
            },
            {
                path: AppUrls.MENU_LIST,
                exact: true,
                component: Loadable({
                    loader: () => import(/* webpackChunkName: "MenuListPage" */ './pages/MenuList/MenuListPage'),
                    loading: () => <strong>Loading...</strong>,
                })
            },
            {
                path: '*',
                exact: false,
                component: Loadable({
                    loader: () => import(/* webpackChunkName: "ErrorPage" */ './pages/ErrorPage'),
                    loading: () => <strong>Loading...</strong>,
                })
            }
        ]
    }
];
