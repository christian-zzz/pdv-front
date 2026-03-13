import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import logo from '../../assets/logo.png';
import { CaretDown, List, X } from '@phosphor-icons/react';

const NAV_LINKS_LEFT = [
    { to: '/', label: 'Inicio' },
    { to: '/about', label: 'Nosotros' },
    { to: '/contact', label: 'Contáctanos' },
];

const NAV_LINKS_RIGHT = [
    { to: '/flights', label: 'Vuelos' },
    { to: '/blog', label: 'Blog' },
];

const HOTELES_SUBMENU = [
    { to: '/hotels/margarita', label: 'Margarita' },
    { to: '/hotels/los-roques', label: 'Los Roques' },
];

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [hotelesOpen, setHotelesOpen] = useState(false);
    const { user, logout } = useAuth();

    const closeAll = () => { setMenuOpen(false); setHotelesOpen(false); };

    return (
        <header className="sticky top-0 left-0 right-0 z-50 backdrop-blur-lg border-b border-white/10 shadow-lg text-[#001e6b]">

            {/* ── Main bar ──────────────────────────────────────────────────── */}
            <div className="px-6 sm:px-8 py-1">

                {/* Desktop layout: 3-column grid */}
                <div className="hidden md:grid md:grid-cols-[1fr_auto_1fr] md:items-center">
                    {/* Left links */}
                    <div className="flex justify-end gap-8 text-lg font-medium pr-8">
                        {NAV_LINKS_LEFT.map(({ to, label }) => (
                            <Link key={to} to={to} className="hover:text-amber-600 transition-colors">
                                {label}
                            </Link>
                        ))}
                    </div>

                    {/* Logo */}
                    <div className="flex justify-center">
                        <Link to="/">
                            <img
                                src={logo}
                                alt="Logo"
                                className="h-12 w-auto object-contain drop-shadow-lg hover:scale-105 transition-transform duration-300"
                            />
                        </Link>
                    </div>

                    {/* Right links */}
                    <div className="flex justify-start gap-8 text-lg font-medium items-center pl-8">
                        {/* Hoteles dropdown */}
                        <div className="group relative cursor-pointer">
                            <span className="flex items-center gap-1 hover:text-amber-600 transition-colors">
                                Hoteles
                                <CaretDown className="w-4 h-4"  />
                            </span>
                            <div className="absolute top-full left-0 mt-2 w-48 bg-white text-gray-800 rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                                {HOTELES_SUBMENU.map(({ to, label }) => (
                                    <Link key={to} to={to} className="block px-4 py-2.5 hover:bg-orange-50 hover:text-amber-600 first:rounded-t-xl last:rounded-b-xl transition-colors">
                                        {label}
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {NAV_LINKS_RIGHT.map(({ to, label }) => (
                            <Link key={to} to={to} className="hover:text-amber-600 transition-colors">
                                {label}
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Mobile layout: logo left + burger right */}
                <div className="flex md:hidden items-center justify-between py-1">
                    <Link to="/" onClick={closeAll}>
                        <img
                            src={logo}
                            alt="Logo"
                            className="h-10 w-auto object-contain drop-shadow-md"
                        />
                    </Link>

                    <button
                        type="button"
                        onClick={() => { setMenuOpen((o) => !o); setHotelesOpen(false); }}
                        aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
                        className="p-2 rounded-xl text-[#001e6b] hover:bg-[#001e6b]/10 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#001e6b]"
                    >
                        {menuOpen ? (
                            /* X icon */
                            <X className="w-6 h-6"  />
                        ) : (
                            /* Hamburger icon */
                            <List className="w-6 h-6"  />
                        )}
                    </button>
                </div>
            </div>

            {/* ── Mobile dropdown menu ──────────────────────────────────────── */}
            <div
                className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
            >
                <nav className="flex flex-col px-6 pb-4 pt-1 gap-1 border-t border-[#001e6b]/10">
                    {NAV_LINKS_LEFT.map(({ to, label }) => (
                        <Link
                            key={to}
                            to={to}
                            onClick={closeAll}
                            className="px-3 py-2.5 rounded-xl text-base font-medium hover:bg-[#001e6b]/8 hover:text-amber-600 transition-colors"
                        >
                            {label}
                        </Link>
                    ))}

                    {/* Hoteles accordion */}
                    <div>
                        <button
                            type="button"
                            onClick={() => setHotelesOpen((o) => !o)}
                            className="w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-base font-medium hover:bg-[#001e6b]/8 hover:text-amber-600 transition-colors"
                        >
                            <span>Hoteles</span>
                            <CaretDown
                                className={`w-4 h-4 transition-transform duration-200 ${hotelesOpen ? 'rotate-180' : ''}`}
                                
                            />
                        </button>

                        <div className={`overflow-hidden transition-all duration-200 ${hotelesOpen ? 'max-h-40' : 'max-h-0'}`}>
                            <div className="ml-4 mt-1 flex flex-col gap-0.5">
                                {HOTELES_SUBMENU.map(({ to, label }) => (
                                    <Link
                                        key={to}
                                        to={to}
                                        onClick={closeAll}
                                        className="px-3 py-2 rounded-lg text-sm font-medium text-[#001e6b]/80 hover:text-amber-600 hover:bg-amber-50 transition-colors"
                                    >
                                        {label}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>

                    {NAV_LINKS_RIGHT.map(({ to, label }) => (
                        <Link
                            key={to}
                            to={to}
                            onClick={closeAll}
                            className="px-3 py-2.5 rounded-xl text-base font-medium hover:bg-[#001e6b]/8 hover:text-amber-600 transition-colors"
                        >
                            {label}
                        </Link>
                    ))}
                </nav>
            </div>
        </header>
    );
};

export default Header;
