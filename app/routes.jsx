import App from './pages/App';
import HomePage from './pages/HomePage';
import AboutusPage from './pages/AboutUsPage';
import ContactUsPage from './pages/ContactUsPage';
import AppUrls from './appConstants/appUrls';

export default [
    {
        path: AppUrls.ROOT,
        component: App,
        routes: [
            {
                path: AppUrls.HOME,
                exact: false,
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
                        exact: false,
                    }
                ]
            }
        ]
    }
];
