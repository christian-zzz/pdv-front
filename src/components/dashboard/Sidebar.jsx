import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import logo from '../../assets/logo.png';
import { useTour } from '../../context/TourContext';
import { HouseIcon, PackageIcon, AirplaneIcon, BuildingsIcon, ArticleIcon, ChatTeardropTextIcon, UsersIcon, UserCircleIcon, WhatsappLogoIcon, InfoIcon, ImagesIcon, PencilLineIcon, QuestionIcon, SignOutIcon } from '@phosphor-icons/react';

const NAV_ITEMS = [
    {
        section: 'Menú',
        items: [
            {
                label: 'Dashboard',
                id: 'nav-dashboard',
                to: '/dashboard',
                allowedRoles: [1, 2, 3],
                icon: <HouseIcon className="w-5 h-5"  />,
            },
            {
                label: 'Usuarios',
                id: 'nav-usuarios',
                to: '/dashboard/usuarios',
                allowedRoles: [1],
                icon: <UserCircleIcon className="w-5 h-5"  />,
            },
        ],
    },
    {
        section: 'Catálogo',
        items: [
            {
                label: 'Paquetes',
                id: 'nav-paquetes',
                to: '/dashboard/paquetes',
                allowedRoles: [1, 2],
                icon: <PackageIcon className="w-5 h-5"  />,
            },
            {
                label: 'Vuelos',
                id: 'nav-vuelos',
                to: '/dashboard/vuelos',
                allowedRoles: [1, 2],
                icon: <AirplaneIcon className="w-5 h-5"  />,
            },
            {
                label: 'Hoteles',
                id: 'nav-hoteles',
                to: '/dashboard/hoteles',
                allowedRoles: [1, 2],
                icon: <BuildingsIcon className="w-5 h-5"  />,
            },
            {
                label: 'Blog',
                id: 'nav-blog',
                to: '/dashboard/blog',
                allowedRoles: [1, 2],
                icon: <ArticleIcon className="w-5 h-5"  />,
            },
        ],
    },
    {
        section: 'Atención',
        items: [
            {
                label: 'Consultas',
                id: 'nav-consultas',
                to: '/dashboard/consultas',
                allowedRoles: [1, 3],
                icon: <ChatTeardropTextIcon className="w-5 h-5"  />,
            },
            {
                label: 'Asesores',
                id: 'nav-asesores',
                to: '/dashboard/asesores',
                allowedRoles: [1, 3],
                icon: <UsersIcon className="w-5 h-5"  />,
            },
            {
                label: 'WhatsApp',
                id: 'nav-whatsapp',
                to: '/dashboard/whatsapp',
                allowedRoles: [1, 3],
                icon: <WhatsappLogoIcon className="w-5 h-5"  />,
            },
        ],
    },
    {
        section: 'Editar Página',
        id: 'nav-edit-pages',
        items: [
            {
                label: 'Información',
                to: '/dashboard/informacion',
                allowedRoles: [1, 2],
                icon: <InfoIcon className="w-5 h-5"  />,
            },
            {
                label: 'Imagenes',
                to: '/dashboard/imagenes',
                allowedRoles: [1, 2],
                icon: <ImagesIcon className="w-5 h-5"  />,
            },
            {
                label: 'Contenido',
                to: '/dashboard/contenido',
                allowedRoles: [1, 2],
                icon: <PencilLineIcon className="w-5 h-5"  />,
            },
        ],
    },
];

const SidebarLink = ({ to, icon, label, end }) => (
    <NavLink
        to={to}
        end={end}
        className={({ isActive }) =>
            `flex items-center gap-3 px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 ${isActive
                ? 'bg-[#ed6f00] text-white shadow-sm shadow-orange-200'
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
    const { startTour } = useTour();

    const handleLogout = async () => {
        await logout();
        navigate('/');
    };

    return (
        <aside className="w-60 shrink-0 bg-white border-r border-gray-200 flex flex-col h-screen sticky top-0">
            {/* Logo */}
            <div className="flex items-center gap-3 px-4 py-3 border-b border-gray-100">
                <img src={logo} alt="Plan de Viaje" className="h-8 w-auto object-contain" />
                <span className="text-xs font-bold text-[#001f6c] uppercase tracking-wider leading-tight">
                    Plan de<br />Viaje
                </span>
            </div>

            {/* Nav */}
            <nav className="flex-1 px-3 py-3 space-y-3 overflow-y-auto custom-scrollbar">
                {NAV_ITEMS.map(({ section, items }) => {
                    const filteredItems = items.filter(item => user && item.allowedRoles.includes(user.role));

                    if (filteredItems.length === 0) return null;

                    return (
                        <div key={section} id={NAV_ITEMS.find(n => n.section === section)?.id}>
                            <p className="text-[10px] font-bold uppercase tracking-widest text-[#001f6c]/50 px-3 mb-1">
                                {section}
                            </p>
                            <ul className="space-y-0.5">
                                {filteredItems.map((item) => (
                                    <li key={item.to} id={item.id}>
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
            <div className="px-3 py-3 border-t border-gray-100 space-y-0.5">
                {user?.role === 1 ? (
                    <div className="relative group">
                        <button
                            className="w-full flex items-center justify-between px-3 py-1.5 rounded-lg text-sm font-medium text-[#4a5878] hover:bg-[#001f6c]/8 hover:text-[#001f6c] transition-all duration-200"
                        >
                            <div className="flex items-center gap-3">
                                <QuestionIcon className="w-5 h-5" />
                                Tour de Ayuda
                            </div>
                        </button>
                        <div className="absolute bottom-full left-0 w-full mb-1 hidden group-hover:flex flex-col bg-white border border-gray-100 shadow-xl rounded-xl overflow-hidden z-50">
                            <button onClick={() => startTour(1)} className="px-4 py-2 text-xs text-left text-gray-700 hover:bg-[#ed6f00] hover:text-white transition-colors">Tour Administrador</button>
                            <button onClick={() => startTour(2)} className="px-4 py-2 text-xs text-left text-gray-700 hover:bg-[#ed6f00] hover:text-white transition-colors">Tour Editor</button>
                            <button onClick={() => startTour(3)} className="px-4 py-2 text-xs text-left text-gray-700 hover:bg-[#ed6f00] hover:text-white transition-colors">Tour Asesor</button>
                        </div>
                    </div>
                ) : (
                    <button
                        onClick={() => startTour(user?.role)}
                        className="w-full flex items-center gap-3 px-3 py-1.5 rounded-lg text-sm font-medium text-[#4a5878] hover:bg-[#001f6c]/8 hover:text-[#001f6c] transition-all duration-200"
                    >
                        <QuestionIcon className="w-5 h-5" />
                        Repetir Tour
                    </button>
                )}
                <button
                    onClick={handleLogout}
                    className="w-full flex items-center gap-3 px-3 py-1.5 rounded-lg text-sm font-medium text-red-500 hover:bg-red-50 transition-all duration-200"
                >
                    <SignOutIcon className="w-5 h-5"  />
                    Cerrar Sesión
                </button>
            </div>
        </aside>
    );
};

export default Sidebar;
