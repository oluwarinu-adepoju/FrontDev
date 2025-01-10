// src/pages/Question/Question.jsx
import React, { useState, useEffect } from 'react';
import styles from './Question.module.css';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Button from '../../components/Button/Button';

const Question = () => {
    const [time, setTime] = useState(45 * 60); // 45 minutes in seconds
    const [currentSubject, setCurrentSubject] = useState('English');
    const [currentQuestion, setCurrentQuestion] = useState(1);
    const [selectedOptions, setSelectedOptions] = useState({});
    const [questionCounts, setQuestionCounts] = useState({
        'English': 60,
        'Mathematics': 40,
        'Physics': 40,
        'Chemistry': 40
    });
    
    useEffect(() => {
      let intervalId;
       if(time > 0) {
          intervalId = setInterval(() => {
            setTime((prevTime) => prevTime - 1);
          }, 1000);
       }
        return () => clearInterval(intervalId);
    }, [time]);
  
    const formatTime = () => {
       const minutes = Math.floor(time / 60);
       const seconds = time % 60;
       return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    };
  
  
  const handleSubjectChange = (subject) => {
       setCurrentSubject(subject);
        setCurrentQuestion(1);
    };

  const handleOptionSelect = (option) => {
      setSelectedOptions(prevState => ({
         ...prevState,
        [currentQuestion]: option,
       }))
       markQuestionAnswered(currentQuestion);
  }
    const markQuestionAnswered = (question) => {
       const box = document.querySelector(`#question-grid [data-question="${question}"]`);
       if(box) {
         box.classList.add(styles.answered);
        }
    }

    const handleNextQuestion = () => {
        if(currentQuestion < questionCounts[currentSubject]) {
           setCurrentQuestion(prev => prev + 1);
         }
     };

    const handlePrevQuestion = () => {
        if(currentQuestion > 1) {
           setCurrentQuestion(prev => prev - 1);
        }
    };
    
    const handleTabClick = (tab) => {
        handleSubjectChange(tab.dataset.subject);
    }

    const createQuestionGrid = () => {
        const count = questionCounts[currentSubject];
        const boxes = [];
        for(let i = 1; i <= count; i++) {
            boxes.push(
                <div key={i} className={styles.questionBox} data-question={i}></div>
            );
        }
        return boxes;
    }

    const handleSubmit = () => {
      if(confirm('Are you sure you want to submit your test?')) {
         // Add submission logic here
          alert('Test submitted successfully!');
      }
   };

    return (
        <>
            <Navbar/>
            <div className={styles.container}>
                <div className={styles.questionProgress}>
                    <div className={styles.subjectLabel} id="subject-label">{currentSubject} ({questionCounts[currentSubject]} Questions)</div>
                    <div className={styles.subjectGrid} id="question-grid">
                       {createQuestionGrid()}
                    </div>
                </div>

                <div className={styles.mainContent}>
                    <div className={styles.header}>
                        <h1>Scholafit Practice Test</h1>
                    </div>

                    <div className={styles.subjectTabs}>
                      <div className={`${styles.subjectTab} ${currentSubject === 'English' ? styles.active : ''}`}  data-subject="English" onClick={(e) => handleTabClick(e.target)} data-questions="60">English</div>
                      <div className={`${styles.subjectTab} ${currentSubject === 'Mathematics' ? styles.active : ''}`} data-subject="Mathematics" onClick={(e) => handleTabClick(e.target)} data-questions="40">Mathematics</div>
                       <div className={`${styles.subjectTab} ${currentSubject === 'Physics' ? styles.active : ''}`} data-subject="Physics" onClick={(e) => handleTabClick(e.target)} data-questions="40">Physics</div>
                       <div className={`${styles.subjectTab} ${currentSubject === 'Chemistry' ? styles.active : ''}`} data-subject="Chemistry" onClick={(e) => handleTabClick(e.target)} data-questions="40">Chemistry</div>
                   </div>

                    <div className={styles.timer}>Time Left: <span id="time">{formatTime()}</span></div>

                    <div className={styles.questionContainer}>
                        <div className={styles.question}>
                            <h3>Question {currentQuestion}</h3>
                            <p>What is the main theme of Shakespeare's "Macbeth"?</p>
                            <div className={styles.options}>
                                <div className={`${styles.option} ${selectedOptions[currentQuestion] === 'A' ? styles.selected : ''}`} onClick={() => handleOptionSelect('A')}>A) Love and romance</div>
                                <div className={`${styles.option} ${selectedOptions[currentQuestion] === 'B' ? styles.selected : ''}`} onClick={() => handleOptionSelect('B')}>B) Ambition and its corrupting influence</div>
                                <div className={`${styles.option} ${selectedOptions[currentQuestion] === 'C' ? styles.selected : ''}`} onClick={() => handleOptionSelect('C')}>C) Family relationships</div>
                                <div className={`${styles.option} ${selectedOptions[currentQuestion] === 'D' ? styles.selected : ''}`} onClick={() => handleOptionSelect('D')}>D) Social justice</div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.navigation}>
                        <div className={styles.navButtons}>
                            <Button style='light' onClick={handlePrevQuestion}>Prev</Button>
                            <Button style='light' onClick={handleNextQuestion}>Next</Button>
                        </div>
                        <Button style="secondary" onClick={handleSubmit}>Submit Test</Button>
                    </div>
                </div>
            </div>
           <Footer/>
        </>
    );
};

export default Question;