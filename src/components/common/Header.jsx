import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';

const Header = () => {
    return (
        <header className="sticky top-0 left-0 right-0 z-50 grid grid-cols-[1fr_auto_1fr] items-center py-1 px-12 backdrop-blur-lg border-b  border-white/10 shadow-lg text-[#001e6b]">
            {/* Left Links */}
            <div className="flex justify-end gap-8 text-lg font-medium pr-8">
                <Link to="/" className="hover:text-amber-600 transition-colors">Inicio</Link>
                <Link to="/about" className="hover:text-amber-600 transition-colors">Nosotros</Link>
                <Link to="/contact" className="hover:text-amber-600 transition-colors">Contáctanos</Link>
            </div>

            {/* Center Logo */}
            <div className="flex justify-center">
                <img src={logo} alt="Logo" className="h-12 w-auto object-contain drop-shadow-lg transform hover:scale-105 transition-transform duration-300" />
            </div>

            {/* Right Links */}
            <div className="flex justify-start gap-8 text-lg font-medium items-center pl-8">
                <div className="group relative cursor-pointer">
                    <span className="flex items-center gap-1 hover:text-amber-600 transition-colors">
                        Hoteles
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                        </svg>
                    </span>
                    {/* Dropdown placeholder */}
                    <div className="absolute top-full left-0 mt-2 w-48 bg-white text-gray-800 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                        <Link to="/hotels/margarita" className="block px-4 py-2 hover:bg-gray-100 rounded-md">Margarita</Link>
                        <Link to="/hotels/los-roques" className="block px-4 py-2 hover:bg-gray-100 rounded-md">Los Roques</Link>
                    </div>
                </div>
                <Link to="/flights" className="hover:text-amber-600 transition-colors">Vuelos</Link>
                <Link to="/blog" className="hover:text-amber-600 transition-colors">Blog</Link>
            </div>
        </header>
    );
};

export default Header;
