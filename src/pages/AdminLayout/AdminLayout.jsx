// src/pages/AdminLayout/AdminLayout.jsx
import React from 'react';
import styles from './AdminLayout.module.css';
import { Link, Outlet } from 'react-router-dom';

const AdminLayout = () => {

    return (
    <div className={styles.container}>
       <div className={styles.hamburger} onClick={() => {
                const sidebar = document.querySelector(`.${styles.sidebar}`);
                sidebar.classList.toggle(styles.active);
            }}>
            <i className="fas fa-bars"></i>
       </div>
       <div className={`${styles.sidebar}`}>
                <div className={styles.logo}>ScholaFit</div>
                <Link to="/admin" className={styles.navItem}>
                    <i className="fas fa-home"></i>Dashboard
                </Link>
                <Link to="/admin/students" className={styles.navItem}>
                    <i className="fas fa-users"></i>Students
                </Link>
                <Link to="/admin/tokens" className={styles.navItem}>
                   <i className="fas fa-key"></i>Tokens
                </Link>
          </div>

            <div className={styles.mainContent}>
                <Outlet/>
            </div>
        </div>
    );
};

export default AdminLayout;