// src/pages/Payment/Payment.jsx
import React, {useState} from 'react';
import styles from './Payment.module.css';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Button from '../../components/Button/Button';
import Dropdown from '../../components/Dropdown/Dropdown';


const Payment = () => {
   const [selectedCard, setSelectedCard] = useState(null);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [cardNumber, setCardNumber] = useState('');
    const [expiry, setExpiry] = useState('');
    
    const handleCardSelect = (card) => {
        setSelectedCard(card);
    };

     const handlePaymentSubmit = (e) => {
         e.preventDefault();
        alert('Payment processing... This is a demo.');
       // add payment logic here
    };


      const userDropdownItems = [
        { label: 'Profile', to: '/dashboard' },
        { label: 'Payment History', to: '/dashboard' },
        { label: 'Logout', to: '#' }
      ];
      
        const handleCardNumberChange = (e) => {
        let value = e.target.value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
        let formattedValue = '';
        
        for(let i = 0; i < value.length; i++) {
            if(i > 0 && i % 4 === 0) {
                formattedValue += ' ';
            }
            formattedValue += value[i];
        }
        
        setCardNumber(formattedValue);
    }
     const handleExpiryChange = (e) => {
         let value = e.target.value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
        if(value.length > 2) {
            value = value.slice(0,2) + '/' + value.slice(2);
        }
       setExpiry(value);
    }
    return (
      <>
        <Navbar/>
        <div className={styles.paymentContainer}>
            <div className={styles.paymentHeader}>
                <h1>Select Payment Method</h1>
                <p>Choose your preferred payment option</p>
            </div>

            <div className={styles.cardIcons}>
                <svg viewBox="0 0 50 30" fill="#1A1F71">
                    <path d="M18.7,11.5L14,23.5h-3.1l2.3-6.1L10,11.5h3.2l1.9,4.7l1.1-4.7H18.7z M19.8,19.9h2.9l0.4-1.2h-2.9L19.8,19.9z M21.7,11.5l-0.9,2.4h2.9l0.9-2.4H21.7z M20.5,15.7l-0.4,1.2h2.9l0.4-1.2H20.5z"/>
                    <path d="M31.7,16.8c0,3.9-3.2,7.1-7.1,7.1c-3.9,0-7.1-3.2-7.1-7.1c0-3.9,3.2-7.1,7.1-7.1C28.5,9.7,31.7,12.9,31.7,16.8z"/>
                    <path fill="#F7B600" d="M38.3,16.8c0,3.9-3.2,7.1-7.1,7.1c-3.9,0-7.1-3.2-7.1-7.1c0-3.9,3.2-7.1,7.1-7.1C35.1,9.7,38.3,12.9,38.3,16.8z"/>
                </svg>
                <svg viewBox="0 0 50 30" fill="#EB001B">
                    <circle cx="25" cy="15" r="7"/>
                </svg>
                <svg viewBox="0 0 50 30" fill="#00A1DF">
                    <path d="M15,11.5v12h3v-12H15z M21,11.5v12h3v-12H21z M27,11.5v12h3v-12H27z M33,11.5v12h3v-12H33z"/>
                </svg>
            </div>

            <div className={styles.paymentOptions}>
              <div className={`${styles.paymentCard} ${selectedCard === 'credit' ? styles.selected : ''}`} onClick={() => handleCardSelect('credit')}>
                 <div className={styles.cardHeader}>
                     <svg className={styles.cardIcon} viewBox="0 0 24 24" fill="var(--secondary-color)">
                       <path d="M20,4H4C2.89,4,2.01,4.89,2.01,6L2,18c0,1.11,0.89,2,2,2h16c1.11,0,2-0.89,2-2V6C22,4.89,21.11,4,20,4z M20,18H4v-6h16V18z M20,8H4V6h16V8z"/>
                    </svg>
                        <h3>Credit Card</h3>
                    </div>
                  <p>Pay securely with your credit card</p>
             </div>

              <div className={`${styles.paymentCard} ${selectedCard === 'debit' ? styles.selected : ''}`} onClick={() => handleCardSelect('debit')}>
                  <div className={styles.cardHeader}>
                    <svg className={styles.cardIcon} viewBox="0 0 24 24" fill="var(--secondary-color)">
                      <path d="M20,4H4C2.89,4,2.01,4.89,2.01,6L2,18c0,1.11,0.89,2,2,2h16c1.11,0,2-0.89,2-2V6C22,4.89,21.11,4,20,4z M20,18H4v-6h16V18z M20,8H4V6h16V8z"/>
                    </svg>
                    <h3>Debit Card</h3>
                 </div>
                    <p>Pay directly from your bank account</p>
              </div>
         </div>
            <form className={styles.cardForm} onSubmit={handlePaymentSubmit}>
                <div className={styles.formGroup}>
                     <label>Card Number</label>
                      <input type="text" placeholder="1234 5678 9012 3456" maxLength="19" value={cardNumber} onChange={handleCardNumberChange} />
                 </div>
                <div className={styles.formGroup}>
                     <label>Cardholder Name</label>
                      <input type="text" placeholder="John Doe"/>
                </div>
                <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                         <label>Expiry Date</label>
                           <input type="text" placeholder="MM/YY" maxLength="5" value={expiry} onChange={handleExpiryChange}/>
                     </div>
                    <div className={styles.formGroup}>
                        <label>CVV</label>
                         <input type="password" placeholder="123" maxLength="3"/>
                    </div>
                 </div>

                <Button type="submit">Pay Now</Button>
            </form>
        </div>
        <Footer/>
    </>
    );
};

export default Payment;