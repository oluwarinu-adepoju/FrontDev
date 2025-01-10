// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage/LandingPage';
import Dashboard from './pages/Dashboard/Dashboard';
import SignUp from './pages/SignUp/SignUp';
import ForgetPassword from './pages/ForgetPassword/ForgetPassword';
import PersonalizedLearning from './pages/PersonalizedLearning/PersonalizedLearning';
import Profile from './pages/Profile/Profile';
import Payment from './pages/Payment/Payment';
import Contact from './pages/Contact/Contact';
import Pricing from './pages/Pricing/Pricing';
import About from './pages/About/About';
import Question from './pages/Question/Question';
import AdminLayout from './pages/AdminLayout/AdminLayout';
import Admin from './pages/Admin/Admin';
import Students from './pages/Admin/Students';
import Tokens from './pages/Admin/Tokens';
import './index.css';
import TestInstruction from './pages/TestInstruction/TestInstruction';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/dashboard" element={<Dashboard />} />
                 <Route path="/test_instruction" element={<TestInstruction />} />
                <Route path="/signup" element={<SignUp />} />
                 <Route path="/forgetpassword" element={<ForgetPassword />} />
                <Route path="/personalized_learning" element={<PersonalizedLearning />} />
                <Route path="/profile" element={<Profile />} />
                 <Route path="/payment" element={<Payment />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/pricing" element={<Pricing />} />
                <Route path="/about" element={<About />} />
                <Route path="/question" element={<Question />} />
                <Route path="/admin" element={<AdminLayout />}>
                  <Route index element={<Admin />} />
                  <Route path="students" element={<Students />} />
                   <Route path="tokens" element={<Tokens />} />
                </Route>
            </Routes>
        </Router>
    );
};

export default App;