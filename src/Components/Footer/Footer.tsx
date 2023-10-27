import React from 'react';
import './footer.scss';

export const Footer: React.FC = () => {
    return (
        <>
            <div className="footer-line"></div>

            <footer className="footer">
                <img
                    className="footer__logo"
                    alt="Logo - footer"
                    src={require('./Logo.png')}
                ></img>
                <div className="menu">

                    <a className="footer-link">GITHUB</a>
                    <a className="footer-link">CONTACTS</a>
                    <a className="footer-link">RIGHTS</a>

                </div>
                <div className="footer__back-to-top back-to-top">

                    <span className="back-to-top__txt">
                        Back to top
                    </span>

                    <div className="back-to-top__arrow-button arrow-button">
                        <img
                            className="arrow-button--circle"
                            alt="Back to top"
                            src={require('./rectangle.png')}
                        ></img>
                        <img
                            className="arrow-button-circle__chevron--up"
                            alt="Back to top"
                            src={require('./chevron.png')}
                        ></img>
                    </div>
                    
                </div>
            </footer>
        </>
    );
};
