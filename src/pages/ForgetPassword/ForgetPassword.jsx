// src/pages/ForgetPassword/ForgetPassword.jsx
import React, { useState } from 'react';
import styles from './ForgetPassword.module.css';
import Navbar from '../../components/Navbar/Navbar';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import { Link } from 'react-router-dom';


const ForgetPassword = () => {
    const [email, setEmail] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [emailError, setEmailError] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
          setEmailError('Please enter a valid email address');
          setErrorMessage('');
          setSuccessMessage('');
          return;
        }
        setEmailError(null);

        // Simulate API call
          setTimeout(() => {
          if (email.includes('@')) { // Simple check for demo
            setSuccessMessage('Password reset instructions have been sent to your email.');
            setErrorMessage('');
            setEmail('');
          } else {
             setErrorMessage('Sorry, we couldn\'t find an account with that email address.');
            setSuccessMessage('');
           }
        }, 1000);
    };

    return (
    <>
        <Navbar/>
        <div className={styles.container}>
             <div className={styles.logo}>
                <img src="/images/Scholafit 1.png" alt="Scholafit logo"/>
            </div>
             <h1>Reset Password</h1>
             <p className={styles.description}>Enter your email address and we'll send you instructions to reset your password.</p>

            {successMessage && <div className={`${styles.alert} ${styles.success}`}>{successMessage}</div>}
            {errorMessage && <div className={`${styles.alert} ${styles.error}`}>{errorMessage}</div>}

            <form id="resetForm" onSubmit={handleSubmit}>
                 <Input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    error={emailError}
                 />
                <Button type="submit">Send Reset Instructions</Button>
           </form>
           <div className={styles.backToLogin}>
               <Link to="/signup">Back to Login</Link>
            </div>
        </div>
    </>
    );
};

export default ForgetPassword;