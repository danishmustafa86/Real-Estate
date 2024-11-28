// src/components/Navbar.js
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './navbar.css'; // Custom CSS for Navbar

const Navbar = () => {
  const location = useLocation(); // To highlight the active link
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMobileMenuOpen && !event.target.closest('.navbar')) {
        closeMobileMenu();
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'hidden'; // Prevent background scroll
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  // Close mobile menu when route changes
  useEffect(() => {
    closeMobileMenu();
  }, [location.pathname]);

  return (
    <>
      {/* Mobile Menu Backdrop */}
      <div 
        className={`mobile-menu-backdrop ${isMobileMenuOpen ? 'active' : ''}`}
        onClick={closeMobileMenu}
      />
      
      <nav className="navbar">
        <div className="navbar-brand">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            <img src="./logo.png" alt="Rentiz" />
          </Link>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="mobile-menu-btn" 
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? '✕' : '☰'}
        </button>

        <ul className={`navbar-links ${isMobileMenuOpen ? 'active' : ''}`}>
          <li className={location.pathname === '/' ? 'active' : ''}>
            <Link to="/" onClick={closeMobileMenu}>Home</Link>
          </li>
          <li className={location.pathname === '/about' ? 'active' : ''}>
            <Link to="/about" onClick={closeMobileMenu}>About</Link>
          </li>
          <li className={location.pathname === '/buying' ? 'active' : ''}>
            <Link to="/buying" onClick={closeMobileMenu}>Buying</Link>
          </li>
          <li className={location.pathname === '/renting' ? 'active' : ''}>
            <Link to="/renting" onClick={closeMobileMenu}>Renting</Link>
          </li>
          <li className={location.pathname === '/selling' ? 'active' : ''}>
            <Link to="/selling" onClick={closeMobileMenu}>Selling</Link>
          </li>
          <li className={location.pathname === '/posts' ? 'active' : ''}>
            <Link to="/posts" onClick={closeMobileMenu}>Posts</Link>
          </li>
          <li className={location.pathname === '/contact' ? 'active' : ''}>
            <Link to="/contact" onClick={closeMobileMenu}>Contact</Link>
          </li>
          <li className={location.pathname === '/products' ? 'active' : ''}>
            <Link to="/products" onClick={closeMobileMenu}>Products</Link>
          </li>
          <li className={location.pathname === '/objects' ? 'active' : ''}>
            <Link to="/objects" onClick={closeMobileMenu}>Objects</Link>
          </li>
          <li className={location.pathname === '/login' ? 'active' : ''}>
            <Link to="/login" onClick={closeMobileMenu}>Login</Link>
          </li>
          <li className={location.pathname === '/signup' ? 'active' : ''}>
            <Link to="/signup" onClick={closeMobileMenu}>
              <img src="./btn.png" alt="SignUp" />
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;