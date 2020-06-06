import React from 'react';
import {CityLogo} from '../ui/icons';

const Footer = () => {
    return (
        <Footer className="bck_blue">
            <div className="footer_logo">
                <CityLogo
                    width="70px"
                    height="70px"
                    link={true}
                    linkTo="/"                
                />
            </div>
            <div className="footer_dicl">
                Manchster city 2020.All rights reserved.

            </div>
            
        </Footer>
    );
};

export default Footer;