// src/Components/BeyondBio.js
import React from 'react';
import Navbar from '../Home/Nav';
import Footer from '../Home/Footer';
import { useNavigate } from "react-router-dom"; 
import ContactSection from './GetnTouch';
import SendSection from './Send';
const ContactPage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Navbar />      
      <ContactSection/>
      <SendSection/>
      <Footer/>
    </div>
  );
};

export default ContactPage;
