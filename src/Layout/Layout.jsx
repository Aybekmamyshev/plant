import React from 'react';
import Header from "./Header/Header";
import {Outlet} from "react-router-dom";
import Footer from "./Footer/Footer";
import User from "../Components/Home/User/User";

const Layout = () => {
    return (
        <>
            <Header/>
            <User/>
            <main>
                <Outlet/>
            </main>
           <Footer/>
        </>
    );
};

export default Layout;