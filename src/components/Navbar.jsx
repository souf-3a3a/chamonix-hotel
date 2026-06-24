import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext.jsx';
import './Navbar.css';
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { t, toggleLang } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openMobileMenu = () => {
    setIsMenuOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeMobileMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = 'auto';
  };

  const handleLinkClick = (href) => {
    if (href.startsWith('#')) {
      closeMobileMenu();
      setTimeout(() => {
        const targetElement = document.querySelector(href);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      }, 400);
    } else {
      closeMobileMenu();
    }
  };

  return (
    <>
      {/* Mobile Menu Overlay */}
      <div 
        className={`mobile-menu-overlay ${isMenuOpen ? 'active' : ''}`}
        onClick={closeMobileMenu}
      ></div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMenuOpen ? 'active' : ''}`}>
        <div className="mobile-menu-header">
          <div className="mobile-menu-logo"> <img src="/assets/logo.png" alt="Le Chamonix Logo" height="150px" width="150px" /></div>
          <button className="mobile-menu-close" onClick={closeMobileMenu}>
            &times;
          </button>
        </div>
        
        <ul className="mobile-menu-links">
          <li>
            <Link to="/" onClick={() => handleLinkClick('/')}>
              {t.nav.home}
            </Link>
          </li>
          <li>
            <Link to="/rooms" onClick={() => handleLinkClick('/rooms')}>
              {t.nav.rooms}
            </Link>
          </li>
          <li>
             <Link to="/resto" onClick={() => handleLinkClick('/resto')}>
              {t.nav.restaurant}
            </Link>

          </li>
          <li>
            <a
              href="#"
              className="lang-toggle"
              onClick={(e) => {
                e.preventDefault();
                toggleLang();
              }}
              aria-label="Switch language"
            >
              {t.langLabel}
            </a>
          </li>
        </ul>

        <div className="mobile-menu-info">
          <h4>{t.nav.contactUs}</h4>
          <p>
            {t.nav.address}<br/>
            {t.nav.phone}<br/>
            {t.nav.email}
          </p>
        </div>
      </div>

      {/* Navigation */}
      <nav className={`navbar ${isScrolled ? 'shrink' : ''}`}>
        <div 
          className={`menu-toggle ${isMenuOpen ? 'active' : ''}`}
          onClick={openMobileMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        
        <div className={`logo ${isScrolled ? 'shrink' : ''}`}>
          <img src="/assets/logo.png" alt="Le Chamonix Logo"/>
        </div>
        
        <ul className="nav-links">
          <li>
            <Link to="/">{t.nav.home}</Link>
          </li>
          <li>
            <Link to="/reserver">{t.nav.reserver}</Link>
          </li>
          <li>
            <a href="#contact" onClick={(e) => {
              if (location.pathname !== '/') {
                return; // Let default behavior handle navigation to home page
              }
              e.preventDefault();
              handleLinkClick('#contact');
            }}>
              {t.nav.contact}
            </a>
          </li>
          <li>
            <a
              href="#"
              className="lang-toggle"
              onClick={(e) => {
                e.preventDefault();
                toggleLang();
              }}
              aria-label="Switch language"
            >
              {t.langLabel}
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
   