// src/pages/Pricing/Pricing.jsx
import React from 'react';
import styles from './Pricing.module.css';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Button from '../../components/Button/Button';


const Pricing = () => {
    return (
        <>
            <Navbar/>
            <div className={styles.pricingContainer}>
                <div className={styles.pricingCard}>
                    <div className={styles.pricingHeader}>
                        <h2>Free Plan</h2>
                        <div className={styles.price}>₦0 <span>/7 days</span></div>
                    </div>
                    <ul className={styles.features}>
                        <li>Access to all UTME syllabus subjects</li>
                        <li>Two practice tests with result analysis</li>
                        <li>Basic AI-powered recommendations</li>
                        <li>Limited to initially selected subjects</li>
                    </ul>
                    <Button style="light" onClick={() => alert("Free plan coming soon")} >Get Started</Button>
                </div>

                 <div className={`${styles.pricingCard} ${styles.mostPopular}`}>
                   <span className={styles.popularBadge}>Most Popular</span>
                    <div className={styles.pricingHeader}>
                      <h2>Premium</h2>
                      <div className={styles.price}>₦5,000 <span>/month</span></div>
                   </div>
                   <ul className={styles.features}>
                        <li>Unlimited practice tests and quizzes</li>
                        <li>Comprehensive performance analytics</li>
                        <li>Advanced AI-powered learning paths</li>
                        <li>Change subjects anytime</li>
                        <li>Full access to study materials</li>
                         <li>Priority customer support</li>
                        <li><strong>Earn ₦1,500 for every friend you refer!</strong></li>
                   </ul>
                  <Button style="secondary" onClick={() => alert("Premium plan coming soon")}>Subscribe & Start Earning</Button>
               </div>

            <div className={styles.pricingCard}>
               <div className={styles.pricingHeader}>
                  <h2>Enterprise</h2>
                   <div className={styles.price}>₦2,000 <span>/month/student</span></div>
               </div>
                <ul className={styles.features}>
                    <li>All premium features for 50+ students</li>
                    <li>Centralized management dashboard</li>
                    <li>Bulk student enrollment</li>
                    <li>Customizable learning paths</li>
                    <li>Dedicated account manager</li>
                    <li>Premium support</li>
                    <li><strong>Earn ₦600 per referred student!</strong></li>
                </ul>
                 <Button style="secondary" onClick={() => alert("Enterprise plan coming soon")}>Contact Sales</Button>
           </div>
     </div>

      <div className={styles.affiliateCard} style={{ textAlign: 'center', padding: '2rem', marginTop: '2rem' }}>
           <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Turn Your Network into Income! 🚀</h2>
          <p style={{ fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto', lineHeight: '1.6' }}>
            Join ScholaFit and earn while you learn! Get ₦1,500 for every friend who subscribes to our Premium plan. 
            Share your success story and help others excel in their UTME preparation while building your income.
           The more friends succeed with ScholaFit, the more you earn!
        </p>
        <Button style="light" style={{ maxWidth: '300px', margin: '2rem auto', background: 'var(--accent-color)' }} onClick={() => alert("Referral program coming soon")}>
        Start Earning Today!
      </Button>
      </div>
       <Footer/>
   </>
   );
};

export default Pricing;