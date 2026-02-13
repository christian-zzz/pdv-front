import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/common/Header';

const Layout = () => {
    return (
        <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
            <Header />
            <main>
                <Outlet />
            </main>
        </div>
    );
};

export default Layout;
