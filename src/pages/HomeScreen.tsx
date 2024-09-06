// HomeScreen.js

import React from "react";
import HeroSection1 from "../components/HeroSection1";
import AboutMe from "../components/AboutMe";
import MyProjects1 from "../components/MyProjects1";
import MySkills1 from "../components/MySkills1";

const HomeScreen = () => {
  return (
    <div style={{width:'100vw'}}>
      <HeroSection1 />
      <AboutMe />
      <MyProjects1 />
      <MySkills1 />
    </div>
  );
};

export default HomeScreen;
