// src/components/Footer/Footer.jsx
import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <p>ScholaFit - Making UTME prep fun and easy!</p>
            <div>
                <a href="https://scholafit.com/terms">Rules</a>
                <a href="https://scholafit.com/privacy">Privacy</a>
                <a href="https://scholafit.com/faq">Help</a>
                <a href="https://scholafit.com/contact">Talk to Us</a>
            </div>
        </footer>
    );
};

export default Footer;