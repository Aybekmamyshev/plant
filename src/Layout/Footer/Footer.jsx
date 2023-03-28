import React from 'react';
import "./footer.scss"
import pic from "./first.png"
import second from "./second.png"
import Join from "./Join/Join";
import Contact from "./Contact/Contact";
import Socials from "./Socials/Socials";
const Footer = () => {
    return (
        <div className={'footer'}>
            <div className="container">
                  <Join/>
                  <Contact/>
                  <Socials/>
            </div>
        </div>
    );
};

export default Footer;