import React from 'react';
import './footer.scss';
import { Button } from '../Button/Button';

export const Footer: React.FC = () => {
    return (
    <footer className="footer">
        <div className='footer__wrapper'>
            <section className='footer__logo'> 
                <svg width="89" height="32" xmlns="http://www.w3.org/2000/svg"> 
                    <image x="0" y="0" width="89" height="32" xlinkHref={require('./Logo.png')} />  
                </svg>

            </section>

            <nav className='footer__nav'>
                <a href="/" className='footer__link'>GitHub</a>
                <a href="/" className='footer__link'>Contacts</a>
                <a href="/" className='footer__link'>Rights</a>
            </nav>

            <section className='footer__back-top'>
                
                <span className='footer__back-top--text'>Back to top</span>
                <Button 
                    type="circle"
                    icon="chevron-up"
                    onClick={() => window.scrollTo({
                        top: 0,
                        behavior: 'smooth',
                      })}
                />
                
            </section>

        </div>
    </footer>
    );
};
