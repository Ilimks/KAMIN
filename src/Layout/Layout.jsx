import React from 'react';
import Header from './Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from './Footer/Footer';
import { ThemeProvider } from "../Theme/ThemeContext";

const Layout = () => {
    return (
        <ThemeProvider>
            <div>
               <Header/>
                <Outlet/> 
               <Footer/>
            </div>
        </ThemeProvider>
    );
};

export default Layout;