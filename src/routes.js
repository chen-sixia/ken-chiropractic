import { Navigate, useRoutes } from 'react-router-dom';
import DashboardLayout from './layouts/dashboard';
import SimpleLayout from './layouts/simple';
import ContactPage from './pages/ContactPage';
import MoneyPage from './pages/MoneyPage';
import Page404 from './pages/Page404';
import InfoPage from './pages/InfoPage';
import ChiroPage from './pages/ChiroPage';
import DashboardAppPage from './pages/DashboardAppPage';

export default function Router() {
  const routes = useRoutes([
    {
      path: '/dashboard',
      element: <DashboardLayout />,
      children: [
        { element: <Navigate to="/dashboard/app" />, index: true },
        { path: 'app', element: <DashboardAppPage /> },
        { path: 'chiro', element: <ChiroPage /> },
        { path: 'info', element: <InfoPage /> },
        { path: 'money', element: <MoneyPage /> },
        { path: 'contact', element: <ContactPage /> },
      ],
    },
    {
      element: <SimpleLayout />,
      children: [
        { element: <Navigate to="/dashboard/app" />, index: true },
        { path: '404', element: <Page404 /> },
        { path: '*', element: <Navigate to="/404" /> },
      ],
    },
    {
      path: '*',
      element: <Navigate to="/404" replace />,
    },
  ]);

  return routes;
}
