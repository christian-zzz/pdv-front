import { createBrowserRouter } from 'react-router-dom';
import Layout from './layouts/Layout';
import DashboardLayout from './layouts/DashboardLayout';
import Home from './pages/Home';
import PackageDetail from './pages/PackageDetail';
import FlightDetail from './pages/FlightDetail';
import AccommodationDetail from './pages/AccommodationDetail';
import Dashboard from './pages/Dashboard';
import Paquetes from './pages/admin/Paquetes';
import Vuelos from './pages/admin/Vuelos';
import Hoteles from './pages/admin/Hoteles';
import Blog from './pages/admin/Blog';
import Consultas from './pages/admin/Consultas';
import Asesores from './pages/admin/Asesores';
import Usuarios from './pages/admin/Usuarios';
import WhatsappSettings from './pages/admin/WhatsappSettings';
import Login from './pages/Login';
import ProtectedRoute from './components/common/ProtectedRoute';
import RoleRoute from './components/common/RoleRoute';

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
            {
                path: 'vuelo/:id',
                element: <FlightDetail />,
            },
            {
                path: 'hotel/:id',
                element: <AccommodationDetail />,
            },
            {
                path: 'login',
                element: <Login />,
            },
        ],
    },
    {
        path: '/dashboard',
        element: (
            <ProtectedRoute>
                <DashboardLayout />
            </ProtectedRoute>
        ),
        children: [
            { index: true, element: <Dashboard /> },
            {
                path: 'paquetes',
                element: <RoleRoute allowedRoles={[1, 2]}><Paquetes /></RoleRoute>
            },
            {
                path: 'vuelos',
                element: <RoleRoute allowedRoles={[1, 2]}><Vuelos /></RoleRoute>
            },
            {
                path: 'hoteles',
                element: <RoleRoute allowedRoles={[1, 2]}><Hoteles /></RoleRoute>
            },
            {
                path: 'blog',
                element: <RoleRoute allowedRoles={[1, 2]}><Blog /></RoleRoute>
            },
            {
                path: 'consultas',
                element: <RoleRoute allowedRoles={[1, 3]}><Consultas /></RoleRoute>
            },
            {
                path: 'asesores',
                element: <RoleRoute allowedRoles={[1, 3]}><Asesores /></RoleRoute>
            },
            {
                path: 'usuarios',
                element: <RoleRoute allowedRoles={[1]}><Usuarios /></RoleRoute>
            },
            {
                path: 'whatsapp',
                element: <RoleRoute allowedRoles={[1, 3]}><WhatsappSettings /></RoleRoute>
            },
            // Editar Página sub-routes:
            // { path: 'informacion',  element: <RoleRoute allowedRoles={[1, 2]}><Informacion /></RoleRoute> },
            // { path: 'imagenes',     element: <RoleRoute allowedRoles={[1, 2]}><Imagenes /></RoleRoute> },
            // { path: 'contenido',    element: <RoleRoute allowedRoles={[1, 2]}><Contenido /></RoleRoute> },
        ],
    },
]);

export default router;
