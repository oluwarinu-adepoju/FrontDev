// src/components/Dropdown/Dropdown.jsx
import React, { useState, useRef, useEffect } from 'react';
import styles from './Dropdown.module.css';
import { Link } from 'react-router-dom';


const Dropdown = ({ trigger, items, isOpen, setIsOpen }) => {
  const dropdownRef = useRef(null);

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownRef, setIsOpen]);

  return (
    <div className={styles.dropdown} ref={dropdownRef}>
      <div className={styles.dropbtn} onClick={() => setIsOpen(!isOpen)}>
        {trigger}
      </div>
      {isOpen && (
        <div className={styles.dropdownContent}>
          {items.map((item, index) => (
            <Link key={index} to={item.to} className={styles.dropdownItem} onClick={() => setIsOpen(false)}>{item.label}</Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;