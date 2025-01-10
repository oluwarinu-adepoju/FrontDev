// src/pages/About/About.jsx
import React from 'react';
import styles from './About.module.css';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Button from '../../components/Button/Button';

const About = () => {
    return (
        <>
            <Navbar/>
          <div className={styles.hero}>
             <h1>Scholafit</h1>
            <p>Revolutionizing Education in Nigeria</p>
          </div>

           <div className={styles.container}>
              <section className={styles.missionSection}>
                 <h2>Our Mission</h2>
                    <p>To democratize quality education and level the playing field for all Nigerian students.</p>
                  <div className={styles.stats}>
                       <div className={styles.statCard}>
                         <h3>1000+</h3>
                         <p>Active Students</p>
                    </div>
                   <div className={styles.statCard}>
                       <h3>95%</h3>
                       <p>Success Rate</p>
                    </div>
                    <div className={styles.statCard}>
                        <h3>24/7</h3>
                       <p>Learning Access</p>
                    </div>
                </div>
            </section>
            <section className={styles.impactSection}>
                <h2>Our Impact</h2>
                    <div id="testimonials" className={styles.testimonials}>
                        <div className={`${styles.testimonialCard} ${styles.founderCard}`}>
                          <p>"Scholafit has completely transformed my learning experience. The platform's structured approach and comprehensive resources helped me excel in my JAMB preparation."</p>
                            <p><strong>Chioma Okonkwo</strong></p>
                           <p>Lagos State</p>
                        </div>
                     <div className={`${styles.testimonialCard} ${styles.founderCard}`}>
                        <p>"Thanks to Scholafit, I was able to study effectively while working part-time. The flexible learning schedule and quality content made all the difference."</p>
                         <p><strong>Mohammed Ibrahim</strong></p>
                         <p>Abuja</p>
                    </div>
                    <div className={`${styles.testimonialCard} ${styles.founderCard}`}>
                        <p>"The personalized learning approach and dedicated support from Scholafit helped me achieve my dream score. I'm now confident about my university admission."</p>
                         <p><strong>Blessing Adeleke</strong></p>
                        <p>Port Harcourt</p>
                     </div>
                </div>
             </section>
           <section className={styles.founders}>
            <div className={styles.founderCard}>
                <img src="/images/Picture1.jpg" alt="Adepoju Oluwarinu"  style={{ width: '150px', height: '150px', borderRadius: '50%', marginBottom: '1rem', objectFit: 'cover' }}/>
               <h3>Adepoju Oluwarinu</h3>
                <p>Co-founder/CEO</p>
               <p>Visionary leader passionate about transforming education through technology</p>
           </div>
           <div className={styles.founderCard}>
                <img src="/images/Picture2.jpg" alt="Oderinde Taiwo"  style={{ width: '150px', height: '150px', borderRadius: '50%', marginBottom: '1rem', objectFit: 'cover' }}/>
                <h3>Oderinde Taiwo</h3>
                <p>Co-founder/CMO/CTO</p>
                <p>Technical innovator dedicated to creating accessible learning solutions</p>
          </div>
        </section>
         <div style={{ textAlign: 'center' }}>
           <Button style="secondary">Join Scholafit Today</Button>
        </div>
      </div>
       <Footer/>
    </>
    );
};

export default About;