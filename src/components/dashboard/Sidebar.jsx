import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import logo from '../../assets/logo.png';
import { House, Package, Airplane, Buildings, Article, ChatTeardropText, Users, UserCircle, WhatsappLogo, Info, Images, PencilLine, Question, SignOut } from '@phosphor-icons/react';

const NAV_ITEMS = [
    {
        section: 'Menú',
        items: [
            {
                label: 'Dashboard',
                to: '/dashboard',
                allowedRoles: [1, 2, 3],
                icon: <House className="w-5 h-5"  />,
            },
            {
                label: 'Paquetes',
                to: '/dashboard/paquetes',
                allowedRoles: [1, 2],
                icon: <Package className="w-5 h-5"  />,
            },
            {
                label: 'Vuelos',
                to: '/dashboard/vuelos',
                allowedRoles: [1, 2],
                icon: <Airplane className="w-5 h-5"  />,
            },
            {
                label: 'Hoteles',
                to: '/dashboard/hoteles',
                allowedRoles: [1, 2],
                icon: <Buildings className="w-5 h-5"  />,
            },
            {
                label: 'Blog',
                to: '/dashboard/blog',
                allowedRoles: [1, 2],
                icon: <Article className="w-5 h-5"  />,
            },
            {
                label: 'Consultas',
                to: '/dashboard/consultas',
                allowedRoles: [1, 3],
                icon: <ChatTeardropText className="w-5 h-5"  />,
            },
            {
                label: 'Asesores',
                to: '/dashboard/asesores',
                allowedRoles: [1, 3],
                icon: <Users className="w-5 h-5"  />,
            },
            {
                label: 'Usuarios',
                to: '/dashboard/usuarios',
                allowedRoles: [1],
                icon: <UserCircle className="w-5 h-5"  />,
            },
            {
                label: 'WhatsApp',
                to: '/dashboard/whatsapp',
                allowedRoles: [1, 3],
                icon: <WhatsappLogo className="w-5 h-5"  />,
            },
        ],
    },
    {
        section: 'Editar Página',
        items: [
            {
                label: 'Información',
                to: '/dashboard/informacion',
                allowedRoles: [1, 2],
                icon: <Info className="w-5 h-5"  />,
            },
            {
                label: 'Imagenes',
                to: '/dashboard/imagenes',
                allowedRoles: [1, 2],
                icon: <Images className="w-5 h-5"  />,
            },
            {
                label: 'Contenido',
                to: '/dashboard/contenido',
                allowedRoles: [1, 2],
                icon: <PencilLine className="w-5 h-5"  />,
            },
        ],
    },
];

const SidebarLink = ({ to, icon, label, end }) => (
    <NavLink
        to={to}
        end={end}
        className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${isActive
                ? 'bg-[#ed6f00] text-white shadow-md shadow-orange-200'
                : 'text-[#4a5878] hover:bg-[#001f6c]/8 hover:text-[#001f6c]'
            }`
        }
    >
        {icon}
        {label}
    </NavLink>
);

const Sidebar = () => {
    const navigate = useNavigate();
    const { user, logout } = useAuth();

    const handleLogout = async () => {
        await logout();
        navigate('/');
    };

    return (
        <aside className="w-60 shrink-0 bg-white border-r border-gray-200 flex flex-col h-screen sticky top-0">
            {/* Logo */}
            <div className="flex items-center gap-3 px-5 py-4 border-b border-gray-100">
                <img src={logo} alt="Plan de Viaje" className="h-9 w-auto object-contain" />
                <span className="text-xs font-bold text-[#001f6c] uppercase tracking-wider leading-tight">
                    Plan de<br />Viaje
                </span>
            </div>

            {/* Nav */}
            <nav className="flex-1 px-3 py-4 space-y-5 overflow-y-auto">
                {NAV_ITEMS.map(({ section, items }) => {
                    const filteredItems = items.filter(item => user && item.allowedRoles.includes(user.role));

                    if (filteredItems.length === 0) return null;

                    return (
                        <div key={section}>
                            <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 px-4 mb-2">
                                {section}
                            </p>
                            <ul className="space-y-1">
                                {filteredItems.map((item) => (
                                    <li key={item.to}>
                                        <SidebarLink
                                            to={item.to}
                                            icon={item.icon}
                                            label={item.label}
                                            end={item.to === '/dashboard'}
                                        />
                                    </li>
                                ))}
                            </ul>
                        </div>
                    );
                })}
            </nav>

            {/* Bottom */}
            <div className="px-3 py-4 border-t border-gray-100 space-y-1">
                <SidebarLink
                    to="/dashboard/ayuda"
                    label="Ayuda"
                    icon={<Question className="w-5 h-5"  />}
                />
                <button
                    onClick={handleLogout}
                    className="w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium text-red-500 hover:bg-red-50 transition-all duration-200"
                >
                    <SignOut className="w-5 h-5"  />
                    Cerrar Sesión
                </button>
            </div>
        </aside>
    );
};

export default Sidebar;
