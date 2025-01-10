// src/pages/Dashboard/Dashboard.jsx
import React, {useState, useEffect} from 'react';
import styles from './Dashboard.module.css';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Chart from '../../components/Chart/Chart';
import Dropdown from '../../components/Dropdown/Dropdown';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button/Button';


const Dashboard = () => {
    const [activeTab, setActiveTab] = useState('dashboard');
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        // Initially show dashboard content
        setActiveTab('dashboard');
    }, []);


    const handleTabClick = (tab) => {
        setActiveTab(tab);
      };
    

      const userDropdownItems = [
        { label: 'My Profile', to: '/profile' },
        { label: 'Change Password', to: '#' },
        { label: 'Log Out', to: '#' }
      ];
    
     const chartData = {
          labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
            datasets: [{
                label: 'Your First Test Scores',
                data: [65, 72, 78, 83, 85],
                fill: false,
                borderColor: '#3498DB',
                tension: 0.1,
                borderWidth: 2,
                pointBackgroundColor: '#3498DB',
                pointBorderColor: '#ffffff',
                pointHoverBackgroundColor: '#ffffff',
                pointHoverBorderColor: '#3498DB'
            },
            {
                label: 'Your Second Test Scores',
                data: [70, 75, 80, 85, 90],
                fill: false,
                borderColor: '#E74C3C',
                tension: 0.1,
                borderWidth: 2,
                pointBackgroundColor: '#E74C3C',
                pointBorderColor: '#ffffff',
                pointHoverBackgroundColor: '#ffffff',
                pointHoverBorderColor: '#E74C3C'
            }]
        }
        const chartOptions = {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100,
                    ticks: {
                        callback: function(value) {
                            return value + '%';
                        }
                    }
                }
            },
            plugins: {
                legend: {
                    display: true,
                    position: 'top'
                },
                title: {
                    display: true,
                    text: 'How Your Scores Are Getting Better!'
                }
            }
        }
     const subjectChartData = {
        labels: ['English', 'Mathematics', 'Physics', 'Chemistry'],
            datasets: [{
                label: 'Current Score',
                data: [75, 85, 70, 80],
                backgroundColor: '#3498DB',
                borderColor: '#2980B9',
                borderWidth: 1
            }]
    }
    const subjectChartOptions = {
        responsive: true,
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100,
                    ticks: {
                        callback: function(value) {
                            return value + '%';
                        }
                    }
                }
            },
            plugins: {
                legend: {
                    display: true,
                    position: 'top'
                },
                title: {
                    display: true,
                    text: 'Subject Performance'
                }
            }
    }
      const creditChartData = {
        labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
            datasets: [{
                label: 'Credit Points',
                data: [100, 250, 400, 600],
                borderColor: '#E74C3C',
                fill: true
            }]
      }

      const achievementChartData = {
        labels: ['Achievements', 'Goals', 'Milestones'],
            datasets: [{
                label: 'Progress',
                data: [3, 5, 2],
                backgroundColor: '#3498DB',
                borderColor: '#2980B9',
                borderWidth: 1
            }]
      }
      const rankingChartData = {
        labels: ['Top 10%', 'Top 25%', 'Top 50%', 'Below 50%'],
            datasets: [{
                label: 'Your Ranking',
                data: [20, 30, 25, 25],
                backgroundColor: ['#E74C3E', '#3498DB', '#2ECC71', '#95A5A6']
            }]
      }

      const handleNavigation = (path) => {
        navigate(path);
      };

    return (
        <>
            <Navbar/>
            <div className={styles.mainContainer}>
                <div className={styles.sidebar}>
                    <ul className={styles.sidebarMenu}>
                        <li className={activeTab === 'dashboard' ? styles.active : ''} onClick={() => handleTabClick('dashboard')} data-tab="dashboard">
                             <i className="fas fa-home"></i> Dashboard
                         </li>
                        <li className={activeTab === 'profile' ? styles.active : ''} onClick={() => handleTabClick('profile')} data-tab="profile">
                             <i className="fas fa-user"></i> Profile
                        </li>
                        <li className={activeTab === 'analytics' ? styles.active : ''} onClick={() => handleTabClick('analytics')} data-tab="analytics">
                            <i className="fas fa-chart-bar"></i> Analytics
                        </li>
                        <li className={activeTab === 'studyPlan' ? styles.active : ''} onClick={() => handleTabClick('studyPlan')} data-tab="studyPlan">
                            <i className="fas fa-book"></i> Study Plan
                        </li>
                       <li className={activeTab === 'upgrade' ? styles.active : ''} onClick={() => handleTabClick('upgrade')} data-tab="upgrade" className={styles.upgradeTab}>
                            <i className="fas fa-arrow-up"></i> Upgrade
                       </li>
                    </ul>
                </div>

                <div className={`${styles.mainContent} ${activeTab === 'dashboard' ? styles.active : ''}`} id="dashboard-content">
                    <div className={styles.container}>
                        <div className={styles.greeting}>
                            <h1>Hi Rinad! 👋</h1>
                            <p>You're doing great! Let's keep learning together.</p>
                        </div>
                        
                        <div className={styles.dashboardGrid}>
                            <div className={styles.row1}>
                                <div className={styles.card}>
                                    <h3>What You've Done Lately</h3>
                                    <div className={styles.activityItem}>You finished Practice Test 3 - Nice work!</div>
                                    <div className={styles.activityItem}>You studied algebra topics - Keep it up!</div>
                                    <div className={styles.activityItem}>You got 85% on your last test - Amazing!</div>
                                </div>
                                
                                <div className={styles.card}>
                                   <h3>Your Progress</h3>
                                      <Chart 
                                        type="line"
                                        data={chartData}
                                        options={chartOptions}
                                         chartId="readinessChart"
                                      />
                                </div>
                                
                                <div className={styles.card}>
                                   <h3>Start Studying</h3>
                                     <div className={styles.quickStart}>
                                       <Button style="light" onClick={() => handleNavigation('/test_instruction')}>Take a Practice Test</Button>
                                       <Button style="light"  onClick={() => handleNavigation('/personalized_learning')}>Chat with Rita (Your Study Helper)</Button>
                                       <Button style="light" onClick={() => handleNavigation('/dashboard')}>See How You're Doing</Button>
                                    </div>
                                </div>
                            </div>
                            
                            <div className={styles.row2}>
                                <div className={styles.card}>
                                    <h3>Important Dates</h3>
                                    <div className={styles.deadlineItem}>
                                        <span>Last day to register for UTME</span>
                                        <span>March 15</span>
                                    </div>
                                    <div className={styles.deadlineItem}>
                                        <span>Your UTME exam</span>
                                        <span>April 25</span>
                                    </div>
                                </div>
                                
                                <div className={styles.card}>
                                    <h3>What to Study Next</h3>
                                    <div className={styles.topicItem}>Calculus (Math)</div>
                                    <div className={styles.topicItem}>Forces and Motion (Physics)</div>
                                    <div className={styles.topicItem}>Chemical Reactions (Chemistry)</div>
                                </div>
                            </div>
                            
                            <div className={styles.row3}>
                                <div className={styles.card}>
                                    <h3>New Updates</h3>
                                    <div className={styles.notificationItem}>We just added new math practice: Trigonometry</div>
                                    <div className={styles.notificationItem}>Message from Team: You're making great progress!</div>
                                    <div className={styles.notificationItem}>New: Check out the latest exam tips</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                 <div className={`${styles.mainContent} ${activeTab === 'profile' ? styles.active : ''}`} id="profile-content">
                   <div className={styles.container}>
                     <h2>My Profile</h2>
                        <div className={styles.profileGrid}>
                           <div className={`${styles.card} ${styles.personalInfo}`}>
                              <h3>Personal Information</h3>
                                 <div className={styles.infoGroup}>
                                     <label>Full Name</label>
                                    <p>Rinad Adebayo</p>
                                </div>
                                <div className={styles.infoGroup}>
                                    <label>Age</label>
                                    <p>16</p>
                                </div>
                                <div className={styles.infoGroup}>
                                    <label>Selected UTME Subjects</label>
                                    <ul>
                                        <li>English Language (Compulsory)</li>
                                        <li>Mathematics</li>
                                       <li>Physics</li>
                                        <li>Chemistry</li>
                                     </ul>
                                 </div>
                            </div>
                            <div className={`${styles.card} ${styles.studyPreferences}`}>
                                <h3>Study Preferences</h3>
                                <div className={styles.infoGroup}>
                                   <label>Best Study Time</label>
                                   <p>Early Morning (5am - 8am)</p>
                                 </div>
                                 <div className={styles.infoGroup}>
                                    <label>Study Duration</label>
                                    <p>45 minutes with 15-minute breaks</p>
                                </div>
                                <div className={styles.infoGroup}>
                                     <label>Preferred Learning Method</label>
                                     <p>Visual learning through videos and diagrams</p>
                                 </div>
                          </div>
                            <div className={`${styles.card} ${styles.academicGoals}`}>
                             <h3>Academic Profile</h3>
                                <div className={styles.infoGroup}>
                                     <label>Main Study Challenge</label>
                                      <p>Maintaining focus during long study sessions</p>
                                 </div>
                                <div className={styles.infoGroup}>
                                    <label>Current Understanding</label>
                                    <div className={styles.subjectLevels}>
                                        <div>English: Intermediate</div>
                                        <div>Mathematics: Advanced</div>
                                        <div>Physics: Intermediate</div>
                                         <div>Chemistry: Intermediate</div>
                                   </div>
                               </div>
                               <div className={styles.infoGroup}>
                                   <label>Target UTME Score</label>
                                    <p>300/400</p>
                                </div>
                          </div>
                       </div>
                    </div>
                 </div>
                 <div className={`${styles.mainContent} ${activeTab === 'analytics' ? styles.active : ''}`} id="analytics-content">
                    <div className={styles.container}>
                        <h2>My Learning Analytics</h2>
                        <div className={styles.analyticsGrid}>
                         <div className={styles.card}>
                                <h3>Subject Performance</h3>
                                   <Chart 
                                        type="bar"
                                       data={subjectChartData}
                                        options={subjectChartOptions}
                                        chartId="subjectChart"
                                    />
                            </div>
                          <div className={styles.card}>
                             <h3>Credit Points Earned</h3>
                                <Chart 
                                    type="line"
                                     data={creditChartData}
                                     chartId="creditChart"
                                  />
                           </div>
                            <div className={styles.card}>
                              <h3>Achievement Progress</h3>
                                 <Chart 
                                        type="bar"
                                        data={achievementChartData}
                                         chartId="achievementChart"
                                     />
                            </div>
                         <div className={styles.card}>
                           <h3>Ranking Comparison</h3>
                                <Chart
                                    type="pie"
                                    data={rankingChartData}
                                     chartId="rankingChart"
                                    />
                            </div>
                       </div>
                   </div>
                 </div>
                 <div className={`${styles.mainContent} ${activeTab === 'upgrade' ? styles.active : ''}`} id="upgrade-content">
                  <div className={styles.container}>
                     <div className={`${styles.card} ${styles.currentPlan}`}>
                         <h3>Your Current Plan</h3>
                         <div className={styles.planDetails}>
                            <p className={styles.planType}>Free Plan</p>
                            <p className={styles.planExpiry}>Valid until: December 31, 2023</p>
                            <div className={styles.planFeatures}>
                              <p>Limited access to practice tests</p>
                             <p>Basic performance tracking</p>
                            <p>Basic study materials</p>
                           </div>
                        </div>
                    </div>
        
                     <div className={`${styles.card} ${styles.referralSection}`}>
                         <h3>Share & Earn</h3>
                         <p>Share your referral link and earn rewards when friends subscribe!</p>
                         <div className={styles.referralLinkContainer}>
                             <input type="text" id="referralLink" value="https://scholafit.com/ref/RINAD123" readOnly/>
                           <Button style="light"><span>Copy Link</span></Button>
                         </div>
                         <div className={styles.referralStats}>
                             <div className={styles.statItem}>
                                <span className={styles.statLabel}>Total Referrals</span>
                                  <span className={styles.statValue}>5</span>
                            </div>
                             <div className={styles.statItem}>
                                 <span className={styles.statLabel}>Earnings</span>
                                 <span className={styles.statValue}>₦7,500</span>
                            </div>
                      </div>
                    </div>
    
                    <h2>Upgrade Your Plan</h2>
                     <div className={styles.pricingCards}>
                         <div className={styles.pricingCard}>
                             <h3>Premium</h3>
                             <div className={styles.price}>₦5,000<span className={styles.period}>/month</span></div>
                            <ul className={styles.features}>
                                 <li>Unlimited practice tests and quizzes</li>
                                 <li>Comprehensive performance analytics</li>
                                 <li>Advanced AI-powered learning paths</li>
                                 <li>Change subjects anytime</li>
                                 <li>Full access to study materials</li>
                                 <li>Priority customer support</li>
                            </ul>
                           <div className={styles.referral}>
                              Earn ₦500 for every friend you refer!
                          </div>
                           <Button style="secondary">Subscribe & Start Earning</Button>
                       </div>
                           
                       <div className={styles.pricingCard}>
                         <h3>Quarterly</h3>
                           <div className={styles.price}>₦12,000<span className={styles.period}>/student</span></div>
                           <ul className={styles.features}>
                               <li>All premium features</li>
                                <li>Centralized management dashboard</li>
                                <li>Customizable learning paths</li>
                               <li>Dedicated account manager</li>
                                <li>Premium support</li>
                           </ul>
                           <div className={styles.referral}>
                            Earn ₦600 per referred student!
                           </div>
                           <Button style="secondary">Subscribe & Start Earning</Button>
                        </div>
                    </div>
              </div>
                 </div>
                 <div className={`${styles.mainContent} ${activeTab === 'studyPlan' ? styles.active : ''}`} id="study-plan-content">
                     <div className={styles.container}>
                         <h2>Personalized Study Plan</h2>
                            <div className={styles.studyPlanActions}>
                                <Button style="light" >
                                  <i className="fas fa-print"></i>
                                     Print Study Plan
                                 </Button>
                               <div className={styles.calendarIntegration}>
                                     <Button style="secondary">
                                         <i className="fas fa-calendar-alt"></i>
                                        Add to Calendar
                                    </Button>
                                    <div className={styles.calendarDropdown}>
                                       <a href="#" onClick={() => alert('Google Calendar Integration Coming Soon')}>Google Calendar</a>
                                         <a href="#" onClick={() => alert('Outlook Integration Coming Soon')}>Outlook Calendar</a>
                                         <a href="#" onClick={() => alert('Apple Calendar Coming Soon')}>Apple Calendar</a>
                                         <a href="#" onClick={() => alert('Download ICS Coming Soon')}>Download .ics file</a>
                                      </div>
                                   </div>
                               </div>
                         <div className={styles.card + " " + styles.studyPlan}>
                          <div className={styles.infoGroup}>
                              <label>Daily Schedule (Based on your preferred time: 5am - 8am)</label>
                             <div className={styles.scheduleBlock}>
                                  <p>5:00 - 5:45 AM: Mathematics (Advanced Level)</p>
                                 <p>6:00 - 6:45 AM: Physics (Intermediate Level)</p>
                                <p>7:00 - 7:45 AM: Chemistry/English (Alternating Days)</p>
                              </div>
                          </div>

                         <div className={styles.infoGroup}>
                           <label>Focus Areas</label>
                           <div className={styles.focusAreas}>
                              <div className={styles.focusItem}>
                                 <h4>Mathematics (Priority)</h4>
                                  <p>Advanced topics to maintain excellence</p>
                                   <ul>
                                      <li>Complex calculus problems</li>
                                      <li>Advanced algebra concepts</li>
                                        <li>UTME-style math questions</li>
                                  </ul>
                               </div>
                            <div className={styles.focusItem}>
                              <h4>Physics & Chemistry</h4>
                               <p>Intermediate level enhancement</p>
                                <ul>
                                   <li>Core concept reinforcement</li>
                                    <li>Practice with diagrams (visual learning)</li>
                                    <li>Laboratory calculations</li>
                                  </ul>
                           </div>
                         </div>
                       </div>

                     <div className={styles.infoGroup}>
                        <label>Break Strategy (Based on 45min study sessions)</label>
                        <div className={styles.breakStrategy}>
                            <p>• 15-minute breaks between subjects</p>
                            <p>• Recommended activities during breaks:</p>
                             <ul>
                                  <li>Light stretching</li>
                                 <li>Quick revision of previous session</li>
                                 <li>Hydration and snack</li>
                              </ul>
                         </div>
                    </div>

                     <div className={styles.infoGroup}>
                         <label>Weekly Goals (Targeting 300/400)</label>
                       <div className={styles.weeklyGoals}>
                         <p>• Complete 3 practice tests per subject</p>
                          <p>• Review and correct all mistakes</p>
                         <p>• Focus on visual learning materials</p>
                           <p>• Track progress using analytics</p>
                         </div>
                    </div>
                   </div>
              </div>
            </div>
           <Footer/>
        </>
    );
};
export default Dashboard;