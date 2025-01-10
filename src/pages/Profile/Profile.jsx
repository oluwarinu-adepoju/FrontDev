// src/pages/Profile/Profile.jsx
import React, { useState } from 'react';
import styles from './Profile.module.css';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';


const Profile = () => {
    const [section, setSection] = useState(1);
    const [fullName, setFullName] = useState('');
    const [age, setAge] = useState('');
    const [selectedSubjects, setSelectedSubjects] = useState(['English Language']);
    const [studyTime, setStudyTime] = useState('');
    const [focusDuration, setFocusDuration] = useState('');
    const [learningMethod, setLearningMethod] = useState('');
    const [challenge, setChallenge] = useState('');
    const [understanding, setUnderstanding] = useState('');
    const [targetScore, setTargetScore] = useState('');
    
    const totalSections = 3;

    const handleNext = () => {
      if (validateSection(section)) {
        setSection(section + 1);
        updateProgressBar();
      }
    };

      const handlePrev = () => {
          if(section > 1) {
            setSection(section - 1);
             updateProgressBar();
           }
      };

    const handleSubjectChange = (e, index) => {
        const newSubjects = [...selectedSubjects];
        newSubjects[index] = e.target.value;
        setSelectedSubjects(newSubjects);
    };

    const handleRatingSelect = (option) => {
       setLearningMethod(option);
    };
    const handleUnderstandingSelect = (option) => {
       setUnderstanding(option);
    };
    const updateProgressBar = () => {
        const progress = (section / totalSections) * 100;
        document.getElementById('progressBar').style.width = `${progress}%`;
    };
    
    const validateSection = (sectionNum) => {
      const currentSection = document.getElementById(`section${sectionNum}`);
      const inputs = currentSection.querySelectorAll('input[required], select[required]');
      let valid = true;
      
      inputs.forEach(input => {
        if (!input.value) {
          valid = false;
          input.style.borderColor = 'red';
        } else {
          input.style.borderColor = '#ddd';
        }
      });
      
      return valid;
    }

  const handleSubmit = (e) => {
      e.preventDefault();
      if (!validateSection(section)) return;

      const formData = {
        fullName,
        age,
        selectedSubjects,
        studyTime,
        focusDuration,
        learningMethod,
        challenge,
        understanding,
        targetScore
      };

      console.log('Collected Profile Data:', formData);
      alert('Thank you! Your personalized learning plan is being created.');
      // Reset for demo purposes
       setSection(1);
       setFullName('');
      setAge('');
       setSelectedSubjects(['English Language']);
      setStudyTime('');
       setFocusDuration('');
       setLearningMethod('');
       setChallenge('');
       setUnderstanding('');
       setTargetScore('');
       updateProgressBar();
  };

    return (
    <>
        <Navbar/>
        <div className={styles.container}>
           <div className={styles.header}>
              <img src="/images/Scholafit 1.png" alt="ScholaFit logo" className={styles.logo}/>
              <h1>Welcome to ScholaFit!</h1>
              <p>Let's create your personalized learning experience for UTME preparation</p>
              <div className={styles.progress}>
                <div className={styles.progressBar} id="progressBar"></div>
              </div>
            </div>

             <form id="profileForm" onSubmit={handleSubmit}>
                <div className={`${styles.formSection} ${section === 1 ? styles.active : ''}`} id="section1">
                    <div className={styles.formGroup}>
                         <label>What's your name?</label>
                         <Input
                            type="text"
                            name="fullName"
                            placeholder="Enter your full name"
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                            required
                          />
                    </div>
                   <div className={styles.formGroup}>
                      <label>How old are you?</label>
                     <Input
                        type="number"
                        name="age"
                        placeholder="Enter your age"
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                        required
                        min="14"
                        max="20"
                      />
                   </div>
                 <div className={styles.formGroup}>
                  <label>Select your UTME subjects</label>
                   <div className={styles.subjectSelection}>
                        <div className={styles.englishFixed}>
                           English Language (Compulsory)
                       </div>
                          <select
                                name="subject2"
                                required
                                value={selectedSubjects[1]}
                                onChange={(e) => handleSubjectChange(e, 1)}
                            >
                                <option value="">Select Subject 2</option>
                                <option value="Mathematics">Mathematics</option>
                                <option value="Physics">Physics</option>
                                <option value="Chemistry">Chemistry</option>
                                <option value="Biology">Biology</option>
                                <option value="Literature">Literature</option>
                                <option value="Government">Government</option>
                                <option value="Economics">Economics</option>
                            </select>
                             <select
                                name="subject3"
                                required
                                value={selectedSubjects[2]}
                                onChange={(e) => handleSubjectChange(e, 2)}
                            >
                                <option value="">Select Subject 3</option>
                                 <option value="Mathematics">Mathematics</option>
                                <option value="Physics">Physics</option>
                                <option value="Chemistry">Chemistry</option>
                                <option value="Biology">Biology</option>
                                <option value="Literature">Literature</option>
                                <option value="Government">Government</option>
                                <option value="Economics">Economics</option>
                            </select>
                             <select
                                name="subject4"
                                required
                                value={selectedSubjects[3]}
                                onChange={(e) => handleSubjectChange(e, 3)}
                             >
                                <option value="">Select Subject 4</option>
                                <option value="Mathematics">Mathematics</option>
                                <option value="Physics">Physics</option>
                                <option value="Chemistry">Chemistry</option>
                                <option value="Biology">Biology</option>
                                <option value="Literature">Literature</option>
                                <option value="Government">Government</option>
                                <option value="Economics">Economics</option>
                           </select>
                      </div>
                    </div>
                 </div>
                <div className={`${styles.formSection} ${section === 2 ? styles.active : ''}`} id="section2">
                      <div className={styles.formGroup}>
                        <label>What time of day do you feel most alert and ready to study?</label>
                        <select name="studyTime" required value={studyTime} onChange={(e) => setStudyTime(e.target.value)}>
                            <option value="">Choose your best study time</option>
                            <option value="early_morning">Early Morning (5AM - 8AM)</option>
                            <option value="morning">Morning (8AM - 12PM)</option>
                            <option value="afternoon">Afternoon (12PM - 4PM)</option>
                            <option value="evening">Evening (4PM - 8PM)</option>
                            <option value="night">Night (8PM - 11PM)</option>
                        </select>
                     </div>
                     <div className={styles.formGroup}>
                       <label>How long can you typically focus on studying before needing a break?</label>
                       <select name="focusDuration" required value={focusDuration} onChange={(e) => setFocusDuration(e.target.value)}>
                          <option value="">Select duration</option>
                           <option value="15">About 15 minutes</option>
                           <option value="30">About 30 minutes</option>
                           <option value="45">About 45 minutes</option>
                           <option value="60">About 1 hour</option>
                           <option value="90">More than 1 hour</option>
                        </select>
                     </div>
                  <div className={styles.formGroup}>
                        <label>How do you prefer to learn new topics?</label>
                        <div className={styles.ratingGroup}>
                             <div className={`${styles.ratingOption} ${learningMethod === 'visual' ? styles.selected : ''}`} data-value="visual" onClick={() => handleRatingSelect('visual')}>Through videos and diagrams</div>
                            <div className={`${styles.ratingOption} ${learningMethod === 'reading' ? styles.selected : ''}`} data-value="reading" onClick={() => handleRatingSelect('reading')}>By reading text</div>
                            <div className={`${styles.ratingOption} ${learningMethod === 'practice' ? styles.selected : ''}`} data-value="practice" onClick={() => handleRatingSelect('practice')}>By solving problems</div>
                        </div>
                 </div>
               </div>
               <div className={`${styles.formSection} ${section === 3 ? styles.active : ''}`} id="section3">
                  <div className={styles.formGroup}>
                      <label>What's your biggest challenge when studying?</label>
                      <select name="challenge" required value={challenge} onChange={(e) => setChallenge(e.target.value)}>
                            <option value="">Select your main challenge</option>
                            <option value="concentration">Staying focused</option>
                            <option value="understanding">Understanding complex topics</option>
                            <option value="memorization">Remembering what I learned</option>
                            <option value="motivation">Staying motivated</option>
                            <option value="time">Managing study time</option>
                          </select>
                     </div>
                   <div className={styles.formGroup}>
                         <label>How would you rate your current understanding of your chosen subjects?</label>
                            <div className={styles.ratingGroup}>
                                <div className={`${styles.ratingOption} ${understanding === '1' ? styles.selected : ''}`} data-value="1" onClick={() => handleUnderstandingSelect('1')}>Beginner</div>
                                <div className={`${styles.ratingOption} ${understanding === '2' ? styles.selected : ''}`} data-value="2" onClick={() => handleUnderstandingSelect('2')}>Intermediate</div>
                                <div className={`${styles.ratingOption} ${understanding === '3' ? styles.selected : ''}`} data-value="3" onClick={() => handleUnderstandingSelect('3')}>Advanced</div>
                            </div>
                     </div>
                  <div className={styles.formGroup}>
                        <label>What's your target UTME score?</label>
                          <Input
                           type="number"
                             name="targetScore"
                             placeholder="Enter your target score (180-400)"
                             required
                              min="180"
                            max="400"
                           step="1"
                           value={targetScore}
                           onChange={(e) => setTargetScore(e.target.value)}
                            />
                      </div>
                </div>
                <div className={styles.navigationButtons}>
                  <Button type="button" id="prevBtn" style="light" onClick={handlePrev} style={{ display: section === 1 ? 'none' : 'block' }}>Previous</Button>
                    <Button type="button" id="nextBtn" onClick={handleNext} style={{ display: section === totalSections ? 'none' : 'block' }}>Next</Button>
                    <Button type="submit" id="submitBtn" style="secondary" style={{ display: section === totalSections ? 'block' : 'none' }}>Create My Learning Plan</Button>
                 </div>
              </form>
           </div>
           <Footer/>
        </>
    );
};

export default Profile;