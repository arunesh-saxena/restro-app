
import AppUrls from './appConstants/appUrls';
import App from './pages/App';
import HomePage from './pages/HomePage';
import AboutusPage from './pages/AboutUsPage';
import ContactUsPage from './pages/ContactUsPage';
import ErrorPage from './pages/ErrorPage';

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
                path: AppUrls.ABOUTUS,
                component: AboutusPage,
                exact: false,
                routes: [
                    {
                        path: AppUrls.CONTACTUS,
                        component: ContactUsPage,
                        exact: true,
                    }
                ]
            },
            {
                path: '*',
                exact: false,
                component: ErrorPage
            }
        ]
    }
];
