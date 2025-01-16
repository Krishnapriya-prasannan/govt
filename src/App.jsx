import React from "react";
import Navbar from "./Components/Home/Nav";
import Hero from "./Components/Home/Hero";
import { Story } from "./Components/Home/Story";
function App() {
  return (
    <div>
      <Navbar />
      <main>
        <Hero />
        <Story />
      </main>
    </div>
  );
}

export default App;
