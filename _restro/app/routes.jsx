import React from 'react';
import Loadable from 'react-loadable';
import AppUrls from './appConstants/appUrls';
import App from './pages/App';
import Authentication from './Authentication';

import { checkIsLogin } from './actions/appAction';
import { getMenuList } from './actions/menuAction';
import { getOrderList } from './actions/orderAction';

const HomePage = Loadable({
    loader: () => import(/* webpackChunkName: "HomePage" */ './pages/HomePage'),
    loading: () => <strong>Loading...</strong>
});
const AboutUsPage = Loadable({
    loader: () =>
        import(/* webpackChunkName: "AboutusPage" */ './pages/AboutUsPage'),
    loading: () => <strong>Loading...</strong>
});
const ContactUsPage = Loadable({
    loader: () =>
        import(/* webpackChunkName: "ContactUsPage" */ './pages/ContactUsPage'),
    loading: () => <strong>Loading...</strong>
});
const menuList = Loadable({
    loader: () =>
        import(
            /* webpackChunkName: "MenuListPage" */ './pages/menuList/MenuListPage'
        ),
    loading: () => <strong>Loading...</strong>
});
const LoginPage = Loadable({
    loader: () =>
        import(/* webpackChunkName: "LoginPage" */ './pages/login/LoginPage'),
    loading: () => <strong>Loading...</strong>
});
const SignUpPage = Loadable({
    loader: () =>
        import(
            /* webpackChunkName: "SignUpPage" */ './pages/signUp/SignUpPage'
        ),
    loading: () => <strong>Loading...</strong>
});
const menuUploadPage = Loadable({
    loader: () =>
        import(
            /* webpackChunkName: "MenuUploadPage" */ './pages/menuList/MenuUploadPage'
        ),
    loading: () => <strong>Loading...</strong>
});
const menuEditPage = Loadable({
    loader: () =>
        import(
            /* webpackChunkName: "MenuEditPage" */ './pages/menuList/MenuEditPage'
        ),
    loading: () => <strong>Loading...</strong>
});
const OrderListPage = Loadable({
    loader: () =>
        import(
            /* webpackChunkName: "OrderListPage" */ './pages/order/OrderListPage'
        ),
    loading: () => <strong>Loading...</strong>
});
const ErrorPage = Loadable({
    loader: () =>
        import(/* webpackChunkName: "ErrorPage" */ './pages/ErrorPage'),
    loading: () => <strong>Loading...</strong>
});

export default store => [
    {
        path: AppUrls.ROOT,
        component: App,
        need: [checkIsLogin],
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
                component: AboutUsPage,
                routes: [
                    {
                        path: AppUrls.CONTACT_US,
                        exact: true,
                        component: ContactUsPage
                    }
                ]
            },
            {
                path: AppUrls.LOGIN,
                exact: true,
                component: LoginPage
            },
            {
                path: AppUrls.SIGN_UP,
                exact: true,
                component: SignUpPage
            },
            {
                path: AppUrls.MENU_LIST,
                exact: true,
                need: [getMenuList],
                component: Authentication(menuList, store) // Example of authentication....
            },
            {
                path: AppUrls.ADD_MENU,
                exact: true,
                component: menuUploadPage
            },
            {
                path: `${AppUrls.EDIT_MENU}/:itemID`,
                exact: true,
                component: menuEditPage
            },
            {
                need: [getOrderList],
                path: `${AppUrls.ORDER_LIST}/`,
                exact: true,
                component: OrderListPage
            },
            {
                path: '*',
                exact: false,
                component: ErrorPage
            }
        ]
    }
];
