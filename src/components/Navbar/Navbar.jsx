// src/components/Navbar/Navbar.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';
import Dropdown from '../Dropdown/Dropdown';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };


    const handleNavLinkClick = () => {
        setIsMobileMenuOpen(false);
      };
    
    return (
        <nav className={styles.navbar}>
            <div className={styles.navContainer}>
                <Link to="/" className={styles.navBrand}>
                    <img src="/images/Scholafit 1.png" alt="Scholafit Logo" className={styles.logo}/>
                </Link>

                <div className={styles.hamburger} onClick={toggleMobileMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div className={`${styles.navLinks} ${isMobileMenuOpen ? styles.active : ''}`}>
                    <Link to="/" className={styles.navLink} onClick={handleNavLinkClick}>Home</Link>
                    <Link to="/pricing" className={styles.navLink} onClick={handleNavLinkClick}>Pricing</Link>
                    <Link to="/about" className={styles.navLink} onClick={handleNavLinkClick}>About</Link>
                    <Link to="/contact" className={styles.navLink} onClick={handleNavLinkClick}>Contact</Link>
                    <div className={styles.authButtons}>
                        <Link to="/signup" className={styles.loginBtn} onClick={handleNavLinkClick}>Login</Link>
                        <Link to="/signup" className={styles.signupBtn} onClick={handleNavLinkClick}>Sign Up</Link>
                    </div>
                </div>
                
            </div>
        </nav>
    );
};

export default Navbar;