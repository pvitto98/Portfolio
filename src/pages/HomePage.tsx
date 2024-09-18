// HomePage.js

import React from "react";
import Hero from "../components/HomePage/Hero";
import AboutMe from "../components/HomePage/AboutMe";
import Projects from "../components/HomePage/Projects";
import Skills from "../components/HomePage/Skills";

interface HomeScreenProps {
  onLoaded: () => void; // Define the type for the onLoaded prop
}


const HomePage: React.FC<HomeScreenProps> = ({ onLoaded }) => {
  return (
    <div >
      <Hero onLoaded={onLoaded} />
      <AboutMe />
      <Projects />
      <Skills />
    </div>
  );
};

export default HomePage;
