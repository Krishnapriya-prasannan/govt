import React from "react";
import Navbar from "./Components/Home/Nav";
import Hero from "./Components/Home/Hero";
import { Story } from "./Components/Home/Story";
import { MissionVision } from "./Components/Home/mission";
function App() {
  return (
    <div>
      <Navbar />
      <main>
        <Hero />
        <Story />
        <MissionVision/>
      </main>
    </div>
  );
}

export default App;
