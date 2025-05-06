// src/components/Navbar.js
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './navbar.css'; // Custom CSS for Navbar

const Navbar = () => {
  const location = useLocation(); // To highlight the active link

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/" className="navbar-logo">
          <img src="./logo.png" alt="Rentiz" />
        </Link>
      </div>
      <ul className="navbar-links">
        <li className={location.pathname === '/' ? 'active' : ''}>
          <Link to="/">Home</Link>
        </li>
        <li className={location.pathname === '/about' ? 'active' : ''}>
          <Link to="/about">About</Link>
        </li>
        <li className={location.pathname === '/buying' ? 'active' : ''}>
          <Link to="/buying">Buying</Link>
        </li>
        <li className={location.pathname === '/renting' ? 'active' : ''}>
          <Link to="/renting">Renting</Link>
        </li>
        <li className={location.pathname === '/selling' ? 'active' : ''}>
          <Link to="/selling">Selling</Link>
        </li>
        <li className={location.pathname === '/posts' ? 'active' : ''}>
          <Link to="/posts">Posts</Link>
        </li>
        <li className={location.pathname === '/contact' ? 'active' : ''}>
          <Link to="/contact">Contact</Link>
        </li>
        <li className={location.pathname === '/products' ? 'active' : ''}>
          <Link to="/products">Products</Link>
        </li>



        <li className={location.pathname === '/objects' ? 'active' : ''}>
          <Link to="/objects"> Objects          </Link>
        </li>
        <li className={location.pathname === '/login' ? 'active' : ''}>
          <Link to="/login">Login          </Link>
        </li>
        <li className={location.pathname === '/signup' ? 'active' : ''}>
          <Link to="/signup">
            <img src="./btn.png" alt="SignUp" />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;