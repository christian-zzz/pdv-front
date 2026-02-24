import { createBrowserRouter } from 'react-router-dom';
import Layout from './layouts/Layout';
import DashboardLayout from './layouts/DashboardLayout';
import Home from './pages/Home';
import PackageDetail from './pages/PackageDetail';
import Dashboard from './pages/Dashboard';
import Paquetes from './pages/admin/Paquetes';
import Vuelos from './pages/admin/Vuelos';
import Hoteles from './pages/admin/Hoteles';
import Blog from './pages/admin/Blog';
import Consultas from './pages/admin/Consultas';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            // Add other public routes here
            {
                path: 'package/:id',
                element: <PackageDetail />,
            },
        ],
    },
    {
        path: '/dashboard',
        element: <DashboardLayout />,
        children: [
            { index: true, element: <Dashboard /> },
            { path: 'paquetes', element: <Paquetes /> },
            { path: 'vuelos', element: <Vuelos /> },
            { path: 'hoteles', element: <Hoteles /> },
            { path: 'blog', element: <Blog /> },
            { path: 'consultas', element: <Consultas /> },
            // Editar Página sub-routes:
            // { path: 'informacion',  element: <Informacion /> },
            // { path: 'imagenes',     element: <Imagenes /> },
            // { path: 'contenido',    element: <Contenido /> },
        ],
    },
]);

export default router;
