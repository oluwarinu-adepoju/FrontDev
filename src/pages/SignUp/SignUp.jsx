// src/pages/SignUp/SignUp.jsx
import React, { useState } from 'react';
import styles from './SignUp.module.css';
import Navbar from '../../components/Navbar/Navbar';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';

const SignUp = () => {
    const [activeTab, setActiveTab] = useState('login');
    const [loginEmail, setLoginEmail] = useState('');
    const [loginPassword, setLoginPassword] = useState('');
    const [signupName, setSignupName] = useState('');
    const [signupEmail, setSignupEmail] = useState('');
    const [signupPassword, setSignupPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [loginError, setLoginError] = useState('');
    const [signupError, setSignupError] = useState('');

    const handleTabSwitch = (tab) => {
        setActiveTab(tab);
    };
    
    const handleLoginSubmit = (e) => {
        e.preventDefault();
        if (!loginEmail || !loginPassword) {
            setLoginError('Please fill in all the fields');
            return;
          }
          setLoginError('');
          console.log('Login form submitted', { loginEmail, loginPassword});
        // Add login logic here
    };

    const handleSignupSubmit = (e) => {
        e.preventDefault();
        if (!signupName || !signupEmail || !signupPassword || !confirmPassword) {
            setSignupError('Please fill in all the fields');
            return;
          }
      
        if (signupPassword !== confirmPassword) {
           setSignupError("Password do not match");
            return;
        }
        setSignupError('');
        console.log('Signup form submitted', {signupName, signupEmail, signupPassword});
          // Add signup logic here
    };

    return (
        <>
            <Navbar/>
            <div className={styles.container}>
                <div className={styles.logo}>
                    <img src="/images/Scholafit 1.png" alt="Scholafit logo" />
                </div>
                <div className={styles.tabs}>
                    <div
                        className={`${styles.tab} ${activeTab === 'login' ? styles.active : ''}`}
                        onClick={() => handleTabSwitch('login')}
                    >
                        Login
                    </div>
                    <div
                        className={`${styles.tab} ${activeTab === 'signup' ? styles.active : ''}`}
                        onClick={() => handleTabSwitch('signup')}
                    >
                        Sign Up
                    </div>
                </div>

                 <form
                    id="loginForm"
                    className={`${styles.loginForm} ${activeTab === 'login' ? styles.active : ''}`}
                    onSubmit={handleLoginSubmit}
                >
                      <Input 
                        type="email" 
                        placeholder="Email" 
                        value={loginEmail}
                        onChange={(e) => setLoginEmail(e.target.value)}
                        error={loginError}
                        />
                        
                    <Input
                        type="password"
                        placeholder="Password"
                        value={loginPassword}
                        onChange={(e) => setLoginPassword(e.target.value)}
                        error={loginError}
                         />
                   
                    <div className={styles.forgotPassword}>
                      <a href="/forgetpassword">Forgot Password?</a>
                    </div>
                    <Button type="submit">Login</Button>
                </form>
                 <form
                    id="signupForm"
                    className={`${styles.signupForm} ${activeTab === 'signup' ? styles.active : ''}`}
                    onSubmit={handleSignupSubmit}
                >
                    <Input 
                       type="text" 
                       placeholder="Full Name" 
                       value={signupName}
                       onChange={(e) => setSignupName(e.target.value)}
                       error={signupError}
                    />
                     <Input 
                        type="email" 
                        placeholder="Email" 
                        value={signupEmail}
                        onChange={(e) => setSignupEmail(e.target.value)}
                        error={signupError}
                    />
                     <Input 
                        type="password" 
                        placeholder="Password" 
                        value={signupPassword}
                        onChange={(e) => setSignupPassword(e.target.value)}
                        error={signupError}
                    />
                     <Input 
                        type="password" 
                        placeholder="Confirm Password" 
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        error={signupError}
                    />
                    <Button type="submit" style="secondary">Sign Up</Button>
                </form>

                <div className={styles.divider}>OR</div>

                <div className={styles.oauthButtons}>
                    <div className={styles.oauthButton} onClick={() => alert('Google Sign-in coming soon')}>
                        <svg width="20" height="20" viewBox="0 0 24 24">
                            <path fill="#DB4437" d="M21.35,11.1H12v3.8h5.3c-0.5,2.4-2.4,4.1-5.3,4.1c-3.2,0-5.8-2.6-5.8-5.8s2.6-5.8,5.8-5.8 c1.5,0,2.9,0.6,3.9,1.5l2.9-2.9C17.1,4.5,14.7,3.3,12,3.3c-5,0-9,4-9,9s4,9,9,9c5.2,0,8.7-3.7,8.7-8.9 C20.7,11.9,21.1,11.5,21.35,11.1z"/>
                        </svg>
                        Continue with Google
                    </div>
                    <div className={styles.oauthButton} onClick={() => alert('Yahoo Sign-in coming soon')}>
                       <svg width="20" height="20" viewBox="0 0 24 24">
                        <path fill="#400090" d="M19.82,12H17V9.67h2.82C19.95,9.67,20,9.62,20,9.58V6.42c0-0.04-0.05-0.08-0.18-0.08H17V4h2.82 c0.13,0,0.18-0.04,0.18-0.08V0.92C20,0.88,19.95,0.84,19.82,0.84H4.18C4.05,0.84,4,0.88,4,0.92v3c0,0.04,0.05,0.08,0.18,0.08H7v2.34 H4.18C4.05,6.34,4,6.38,4,6.42v3.17c0,0.04,0.05,0.08,0.18,0.08H7V12H4.18C4.05,12,4,12.04,4,12.08v3.17c0,0.04,0.05,0.08,0.18,0.08 H7v2.34H4.18C4.05,17.66,4,17.71,4,17.75v3.17C4,20.96,4.05,21,4.18,21h15.64c0.13,0,0.18-0.04,0.18-0.08v-3.17 c0-0.04-0.05-0.08-0.18-0.08H17v-2.34h2.82c0.13,0,0.18-0.04,0.18-0.08v-3.17C20,12.04,19.95,12,19.82,12z"/>
                    </svg>
                        Continue with Yahoo
                    </div>
                    <div className={styles.oauthButton} onClick={() => alert('Facebook Sign-in coming soon')}>
                        <svg width="20" height="20" viewBox="0 0 24 24">
                            <path fill="#1877F2" d="M20.9,2H3.1C2.5,2,2,2.5,2,3.1v17.8C2,21.5,2.5,22,3.1,22h9.6v-7.7h-2.6v-3h2.6V9.2c0-2.6,1.6-4,3.9-4c1.1,0,2.1,0.1,2.3,0.1v2.7h-1.6c-1.3,0-1.5,0.6-1.5,1.5v1.9h3l-0.4,3h-2.6V22h5.1c0.6,0,1.1-0.5,1.1-1.1V3.1C22,2.5,21.5,2,20.9,2z"/>
                        </svg>
                        Continue with facebook
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignUp;