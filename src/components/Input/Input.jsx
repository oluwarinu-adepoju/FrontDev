// src/components/Input/Input.jsx
import React from 'react';
import styles from './Input.module.css';

const Input = ({ type, placeholder, value, onChange, error, ...props }) => {
    return (
        <div className={styles.inputContainer}>
        <input
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className={`${styles.input} ${error ? styles.errorInput : ''}`}
            {...props}
            />
            {error && <span className={styles.errorMsg}>{error}</span>}
        </div>
    );
};

export default Input;