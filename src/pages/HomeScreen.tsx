// HomeScreen.js

import React from "react";
import HeroSection1 from "../components/HeroSection1";
import AboutMe from "../components/AboutMe";
import MyProjects1 from "../components/MyProjects1";
import MySkills1 from "../components/MySkills1";

interface HomeScreenProps {
  onLoaded: () => void; // Define the type for the onLoaded prop
}


const HomeScreen: React.FC<HomeScreenProps> = ({ onLoaded }) => {
  return (
    <div >
      <HeroSection1 onLoaded={onLoaded} />
      <AboutMe />
      <MyProjects1 />
      <MySkills1 />
    </div>
  );
};

export default HomeScreen;
