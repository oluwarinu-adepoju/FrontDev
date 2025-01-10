// src/pages/LandingPage/LandingPage.jsx
import React from 'react';
import styles from './LandingPage.module.css';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Button from '../../components/Button/Button';

const LandingPage = () => {
    return (
        <>
        <Navbar/>
          <section className={styles.heroSection}>
              <div className={styles.floatingShapes}>
                  <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <circle cx="80" cy="20" r="5" fill="rgba(255,255,255,0.1)">
                          <animate attributeName="cy" values="20;80;20" dur="3s" repeatCount="indefinite"/>
                      </circle>
                      <rect x="10" y="10" width="10" height="10" fill="rgba(255,255,255,0.1)">
                          <animate attributeName="x" values="10;90;10" dur="4s" repeatCount="indefinite"/>
                      </rect>
                  </svg>
                </div>
              <div className={`${styles.container} ${styles.contentWrapper}`}>
                  <div className="row align-items-center">
                      <div className="col-lg-6">
                          <h1 className={styles.display4 + " fw-bold mb-4"}>Excel in Your UTME Preparation</h1>
                          <p className={styles.lead + " mb-4"}>Transform your UTME preparation with personalized learning paths, adaptive quizzes, and real-time performance tracking.</p>
                          <Button style='secondary'>Start Learning Now</Button>
                      </div>
                      <div className="col-lg-6">
                        <div className={styles.aiGifContainer}>
                           <img alt="animated AI brain visualization with neural networks and pulsing connections, modern tech style" src="https://media.giphy.com/media/l0HlTy9x8FZo0XO1i/giphy.gif" width="400" height="400"/>
                        </div>
                      </div>
                  </div>
              </div>
          </section>

            <section className={styles.py5}>
                <div className={styles.container}>
                    <h2 className={styles.textCenter + " mb-5"}>Why Choose ScholaFit?</h2>
                    <div className="row g-4">
                        <div className="col-md-4">
                            <div className={styles.featureCard + " p-4"}>
                                <i className="fas fa-brain fa-3x mb-3 text-primary"></i>
                                <h3>Smart Learning</h3>
                                <p>Our system adapts to your learning style and pace, creating personalized study plans.</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className={styles.featureCard + " p-4"}>
                                <i className="fas fa-chart-line fa-3x mb-3 text-primary"></i>
                                <h3>Performance Analytics</h3>
                                <p>Track your progress with detailed analytics and insights to improve your weak areas.</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className={styles.featureCard + " p-4"}>
                                <i className="fas fa-users fa-3x mb-3 text-primary"></i>
                                <h3>Community Support</h3>
                                <p>Join a community of learners and get support from experienced mentors.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.bgPrimary + " text-white py-5"}>
                <div className={styles.container + " text-center"}>
                    <h2 className="mb-4">Ready to Begin Your UTME Success Journey?</h2>
                    <p className="lead mb-4">Join thousands of students already preparing with ScholaFit</p>
                    <Button style='light'>Get Started Free</Button>
                </div>
            </section>
        <Footer/>
    </>
    );
};

export default LandingPage;