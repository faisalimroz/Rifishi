import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import NavBar from '../Pages/Navbar/Navbar';
import Footer from '../Pages/Footer/Footer';

const Layout = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
    return (
        <div>
          <NavBar></NavBar>
            <div className='min-h-screen'>
            <Outlet/>
            </div>
         <Footer/>
        </div>
    );
};

export default Layout;