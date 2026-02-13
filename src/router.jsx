import { createBrowserRouter } from 'react-router-dom';
import Layout from './layouts/Layout';
import Home from './pages/Home';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            // Add other routes here
        ],
    },
    // Add auth routes (login/register) outside of the main layout if needed
]);

export default router;
