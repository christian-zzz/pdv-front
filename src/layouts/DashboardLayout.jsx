import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import Sidebar from '../components/dashboard/Sidebar';
import logo from '../assets/logo.png';
import { useAuth } from '../context/AuthContext';

const DashboardLayout = () => {
    const { user } = useAuth();

    return (
        <div className="flex min-h-screen bg-[#f4f7fb] font-sans">
            <Sidebar />

            {/* Main area */}
            <div className="flex-1 flex flex-col min-h-screen">
                {/* Top bar */}
                <header className="sticky top-0 z-20 bg-white/80 backdrop-blur border-b border-gray-200 flex items-center justify-between px-6 py-3">
                    <div className="flex items-center gap-2 text-[#001f6c]">
                        {/* Mobile: show logo */}
                        <Link to="/" className="lg:hidden flex items-center gap-2">
                            <img src={logo} alt="Plan de Viaje" className="h-7 w-auto object-contain" />
                        </Link>
                        <span className="text-sm font-medium text-[#8898aa] hidden lg:block">
                            Panel de Administración
                        </span>
                    </div>

                    {/* Admin avatar */}
                    <div className="flex items-center gap-3">
                        <div className="flex items-center gap-2 bg-[#ed6f00]/10 text-[#ed6f00] rounded-full px-4 py-1.5 text-sm font-semibold">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                                <path fillRule="evenodd" d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" clipRule="evenodd" />
                            </svg>
                            {user?.name || 'Administrador'}
                        </div>
                    </div>
                </header>

                {/* Page content */}
                <main className="flex-1 overflow-y-auto">
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default DashboardLayout;
