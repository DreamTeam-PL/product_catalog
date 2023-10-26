import React from 'react';
import './footer.scss';

export const Footer = () => {
    return (
        <footer className="footer">
            <img
                className="footer__logo"
                alt="Logo - footer"
                src={require('./Logo.png')}
            ></img>
            <div className="menu">
                <span className="menu-item">GITHUB</span>
                <span className="menu-item">CONTACTS</span>
                <span className="menu-item">RIGHTS</span>
            </div>
            <div className="back-to-top-container">
                <span className="back-to-top">Back to top</span>
                <img
                    className="arrow"
                    alt="Back to top"
                    src={require('./OK.png')}
                ></img>
            </div>
        </footer>
    );
};

export default Footer;
