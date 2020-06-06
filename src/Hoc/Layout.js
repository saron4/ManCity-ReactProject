import React from 'react';
import Header from '../Components/Header_footer/Header';
//import Footer from '../Components/Header_footer/Footer.js';

const Layout = (props) => {
    return (
        <div>
            <Header/>
            {props.children}
           
        </div>
    );
};

export default Layout;



