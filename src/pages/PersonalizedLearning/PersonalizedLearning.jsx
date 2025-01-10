// src/pages/PersonalizedLearning/PersonalizedLearning.jsx
import React, { useState, useRef, useEffect } from 'react';
import styles from './PersonalizedLearning.module.css';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';


const PersonalizedLearning = () => {
    const [activeTopic, setActiveTopic] = useState(null);
    const [chatMessages, setChatMessages] = useState([]);
    const messageInputRef = useRef(null);
    const chatMessagesRef = useRef(null)

    useEffect(() => {
        addMessage("Hi! I'm Rita, your AI tutor. What would you like to learn today? You can select a topic from the sidebar or ask me any question!", 'rita');
      }, []);

    useEffect(() => {
        if(chatMessagesRef.current) {
            chatMessagesRef.current.scrollTop = chatMessagesRef.current.scrollHeight;
        }
    }, [chatMessages])

    const handleSubjectClick = (subject, topic) => {
        setActiveTopic({subject, topic});
        initiateTopicConversation(subject, topic);
    };

    const initiateTopicConversation = async (subject, topic) => {
        addMessage(`Let's learn about ${topic} in ${subject}!`, 'rita');
      
        try {
          const response = await fetch('/api/ai_completion', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              prompt: `You are Rita, a friendly and knowledgeable AI tutor. Provide an engaging introduction to ${topic} in ${subject}. Keep it concise but informative.`,
              data: `${subject} ${topic}`
            })
          });
          
          const data = await response.json();
          addMessage(data.message, 'rita');
        } catch (error) {
          console.error('Error:', error);
          addMessage("I apologize, but I'm having trouble connecting right now. Please try again.", 'rita');
        }
      }

    const sendMessage = async () => {
        const message = messageInputRef.current.value.trim();
        if(!message) return;

        addMessage(message, 'user');
        messageInputRef.current.value = '';

        try {
            const response = await fetch('/api/ai_completion', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                prompt: `You are Rita, a helpful AI tutor. Respond to the following question or statement in a friendly and educational way: "${message}"`,
                data: message
              })
            });
            
            const data = await response.json();
            addMessage(data.message, 'rita');
        } catch (error) {
            console.error('Error:', error);
            addMessage("I apologize, but I'm having trouble connecting right now. Please try again.", 'rita');
        }
    }

     const addMessage = (message, sender) => {
        setChatMessages(prevMessages => [
          ...prevMessages,
          { content: message, sender },
        ]);
      };
    
    return (
        <>
            <Navbar/>
            <div className={styles.container}>
              <div className={styles.sidebar}>
                <div className={styles.subjectSection}>
                    <div className={styles.subjectHeader}>Mathematics</div>
                    <div className={styles.topicList}>
                         <div className={styles.topic} data-subject="Mathematics" data-topic="Algebra" onClick={() => handleSubjectClick('Mathematics', 'Algebra')}>Algebra</div>
                        <div className={styles.topic} data-subject="Mathematics" data-topic="Sets" onClick={() => handleSubjectClick('Mathematics', 'Sets')}>Sets</div>
                        <div className={styles.topic} data-subject="Mathematics" data-topic="Logarithms" onClick={() => handleSubjectClick('Mathematics', 'Logarithms')}>Logarithms</div>
                    </div>
                </div>
                <div className={styles.subjectSection}>
                    <div className={styles.subjectHeader}>Physics</div>
                        <div className={styles.topicList}>
                            <div className={styles.topic} data-subject="Physics" data-topic="Mechanics" onClick={() => handleSubjectClick('Physics', 'Mechanics')}>Mechanics</div>
                            <div className={styles.topic} data-subject="Physics" data-topic="Thermodynamics" onClick={() => handleSubjectClick('Physics', 'Thermodynamics')}>Thermodynamics</div>
                            <div className={styles.topic} data-subject="Physics" data-topic="Optics" onClick={() => handleSubjectClick('Physics', 'Optics')}>Optics</div>
                        </div>
                </div>
                <div className={styles.subjectSection}>
                    <div className={styles.subjectHeader}>Chemistry</div>
                        <div className={styles.topicList}>
                             <div className={styles.topic} data-subject="Chemistry" data-topic="Organic Chemistry" onClick={() => handleSubjectClick('Chemistry', 'Organic Chemistry')}>Organic Chemistry</div>
                            <div className={styles.topic} data-subject="Chemistry" data-topic="Chemical Bonding" onClick={() => handleSubjectClick('Chemistry', 'Chemical Bonding')}>Chemical Bonding</div>
                            <div className={styles.topic} data-subject="Chemistry" data-topic="Periodic Table" onClick={() => handleSubjectClick('Chemistry', 'Periodic Table')}>Periodic Table</div>
                        </div>
                </div>
                 <div className={styles.subjectSection}>
                        <div className={styles.subjectHeader}>Biology</div>
                        <div className={styles.topicList}>
                            <div className={styles.topic} data-subject="Biology" data-topic="Cell Biology" onClick={() => handleSubjectClick('Biology', 'Cell Biology')}>Cell Biology</div>
                            <div className={styles.topic} data-subject="Biology" data-topic="Genetics" onClick={() => handleSubjectClick('Biology', 'Genetics')}>Genetics</div>
                             <div className={styles.topic} data-subject="Biology" data-topic="Human Anatomy" onClick={() => handleSubjectClick('Biology', 'Human Anatomy')}>Human Anatomy</div>
                        </div>
                    </div>
                    <a href="/dashboard" className={styles.dashboardBtn}>Return to Dashboard</a>
                </div>
                 <div className={styles.mainContent}>
                     <div className={styles.chatContainer}>
                         <div className={styles.welcomeMessage}>
                             <div className={styles.ritaFace}>
                                 <img src="/images/Ritas face, a female versatile tutor in Nigeria, fun and beautiful, with a white background, dressed officially.png" alt="Rita" width="120" height="120"/>
                             </div>
                             <h1>👋 Meet Rita, Your AI Tutor</h1>
                             <p>Select a topic from the sidebar to start learning, or ask any question!</p>
                          </div>
                          <div className={styles.chatMessages} id="chat-messages" ref={chatMessagesRef}>
                            {chatMessages.map((message, index) => (
                                <div key={index} className={styles.message}>
                                    <div className={`${styles.avatar} ${message.sender === 'rita' ? styles.ritaAvatar : styles.userAvatar}`}>{message.sender === 'rita' ? 'R' : 'U'}</div>
                                    <div className={styles.messageContent}>{message.content}</div>
                                </div>
                            ))}
                          </div>
                         <div className={styles.inputArea}>
                             <input type="text" id="message-input" placeholder="Type your message here..." ref={messageInputRef} onKeyPress={e => e.key === 'Enter' && sendMessage()}/>
                             <button id="send-button" onClick={sendMessage}>Send</button>
                         </div>
                     </div>
                 </div>
            </div>
            <Footer/>
        </>
    );
};

export default PersonalizedLearning;