import { useEffect, useState } from "react";
import { Routes, Route, useNavigationType, useLocation } from "react-router-dom";
import HeroSection1 from "./components/HeroSection1";
import MySkills1 from "./components/MySkills1";
import NavigationBar1 from "./components/NavigationBar1";
import Project1 from "./pages/Project1";
import Contact1 from "./components/Contact1";
import MyProjects1 from "./components/MyProjects1";
import AboutMe from "./components/AboutMe";
import HomeScreen from "./pages/HomeScreen";
import LoadingPage from "./components/LoadingPage"; // Import the loading page component

function App() {
  const [loading, setLoading] = useState(true); // Add a loading state
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  const projectData = [{
    videoSrc: "/bat_video.mp4",
    title: "BAT",
    link: "https://www.brasseria-augusta-taurinorum.it",
    info: `Lipton Teas & Infusions, anciennement Ekaterra, un site présentant les différentes marques de thé, ainsi que l'histoire et les enjeux de la marque. J'ai travaillé en tant que développeur front-end. Mon rôle principal a été de réaliser l'intégration du site, en mettant en place les éléments visuels et interactifs, et j'ai également été chargé de créer la plupart des animations. Le projet est un site statique, dont les données sont récupérées via Contentful grâce à Eleventy.`,
    technologies: ["HTML / CSS / JS", "Eleventy", "Contentful"],
    credits: ["Lipton Teas & Infusions", "Design : Alter Bureau", "Développement : Troa"],
    screenshots: ["/screen1@2x.png", "/screen2@2x.png", "/screen2@2x.png"],
  }];

  const [isLoaded, setIsLoaded] = useState(false);


  return (
    <>
      <NavigationBar1/>
      {!isLoaded && <LoadingPage onLoaded={function (): void {
        console.log("loaded")
      } } />} {/* Show loading page while not loaded */}
      <Routes>
        <Route path="/" element={<HomeScreen onLoaded={() => setIsLoaded(true)} />} />
          <Route path="/BAT" element={<Project1 {...projectData[0]} />} />
        </Routes>
      <Contact1/>
    </>
  );
}
export default App;
