import React from "react";
import Navbar from "./Components/Home/Nav";
import Hero from "./Components/Home/Hero";
import { Story } from "./Components/Home/Story";
import { MissionVision } from "./Components/Home/mission";
import { Certification } from "./Components/Home/Certification";
function App() {
  return (
    <div>
      <Navbar />
      <main>
        <Hero />
        <Story />
        <MissionVision/>
        <Certification/>
      </main>
    </div>
  );
}

export default App;
