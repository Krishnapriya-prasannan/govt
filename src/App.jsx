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
function App() {
  return (
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
  );
}

export default App;
