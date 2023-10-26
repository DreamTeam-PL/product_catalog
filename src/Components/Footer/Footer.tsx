import React from 'react';
import './footer.scss';

export const Footer = () => {
    return (
        <footer className="footer-container">
            <span className="brand-name">NICE & GADGETS</span>
            <div className="menu">
                <span className="menu-item">GITHUB</span>
                <span className="menu-item">CONTACTS</span>
                <span className="menu-item">RIGHTS</span>
            </div>
            <div className="back-to-top-container">
                <span className="back-to-top">Back to top</span>
                <span className="arrow">&uarr;</span>
            </div>
        </footer>
    );
};

export default Footer;
