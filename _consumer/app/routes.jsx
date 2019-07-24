import React from 'react';
import Loadable from 'react-loadable';
import AppUrls from './appConstants/appUrls';
import App from './pages/App';
import { getMenuList } from './actions/menuAction';
import { getRestroList } from './actions/restroAction';

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
                path: `${AppUrls.MENU_LIST}`,
                exact: false,
                need: [getMenuList],
                component: Loadable({
                    loader: () =>
                        import(
                            /* webpackChunkName: "MenuListPage" */ './pages/menuList/MenuListPage'
                        ),
                    loading: () => <strong>Loading...</strong>
                }),
                routes: [
                    {
                        path: `${AppUrls.MENU_LIST}/:restroCode`,
                        exact: true,
                        need: [],
                        component: Loadable({
                            loader: () =>
                                import(
                                    /* webpackChunkName: "MenuListContainer" */ './containers/menu/MenuListContainer'
                                ),
                            loading: () => <strong>Loading...</strong>
                        })
                    }
                ]
            },
            {
                path: AppUrls.CART,
                exact: true,
                need: [getMenuList],
                component: Loadable({
                    loader: () =>
                        import(
                            /* webpackChunkName: "CartPage" */ './pages/cart/CartPage'
                        ),
                    loading: () => <strong>Loading...</strong>
                })
            },
            {
                path: `${AppUrls.order_status}?:tokenId`,
                exact: true,
                need: [],
                component: Loadable({
                    loader: () =>
                        import(
                            /* webpackChunkName: "OrderStatusPage" */ './pages/order/OrderStatusPage'
                        ),
                    loading: () => <strong>Loading...</strong>
                })
            },
            {
                path: AppUrls.ORDERS_VIEW_LIST,
                exact: true,
                need: [getRestroList],
                component: Loadable({
                    loader: () =>
                        import(
                            /* webpackChunkName: "ordersViewListPage" */ './pages/order/ordersViewListPage'
                        ),
                    loading: () => <strong>Loading...</strong>
                })
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
