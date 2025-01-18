import React from "react";
import Navbar from "./Components/Home/Nav";
import Hero from "./Components/Home/Hero";
import { Story } from "./Components/Home/Story";
import { MissionVision } from "./Components/Home/mission";
import { Certification } from "./Components/Home/Certification";
import { BharatEntrepreneursSummit } from "./Components/Home/Book";
import { EmpoweringLabourForm } from "./Components/Home/Submit";
import LatestNews from "./Components/Home/News";
import Footer from "./Components/Home/Footer";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import necessary routing components
import ServicePage from "./Components/Services/ServicePage";
import ContactPage from "./Components/ContactPage/Contact";
function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={
        <div>
      <Navbar />
      <main>
        <Hero />
        <Story />
        <MissionVision/>
        <Certification/>
        <BharatEntrepreneursSummit/>
        <EmpoweringLabourForm/>
        <LatestNews/>
        <Footer/>
      </main>
    </div>
      }/>
               <Route path="/service" element={<ServicePage />} />
               <Route path="/contact" element={<ContactPage />} />

      </Routes>
    </Router>
    
  );
}

export default App;
