import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

function Layout() {
    return (
        <div>
            <Header />
            <div style={{ height: 'auto' }}>
                <Outlet />
            </div>
            <Footer />
        </div>
    );
}

export default Layout;
