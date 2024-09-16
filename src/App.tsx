// App.tsx
import { useEffect, useState } from "react";
import { Routes, Route, useNavigationType, useLocation } from "react-router-dom";
import NavigationBar1 from "./components/NavigationBar1";
import Project1 from "./pages/Project1";
import Contact1 from "./components/Contact1";
import HomeScreen from "./pages/HomeScreen";
import LoadingPage from "./components/LoadingPage";

function App() {
  const [loading, setLoading] = useState(true);
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  const projectData = [
    {
      id: "BAT",
      videoSrc: "/bat_video.mp4",
      title: "BAT",
      link: "/BAT",
      info: `Lipton Teas & Infusions...`,
      technologies: ["HTML / CSS / JS", "Eleventy", "Contentful"],
      credits: ["Lipton Teas & Infusions", "Design : Alter Bureau", "Développement : Troa"],
      content: [
        "image:/screen1@2x.png",
        "text:Description of the project.",
        "image:/screen2@2x.png",
        "text:Additional details about the project.",
      ].join(';'),
      prev: "/ATHING",
      next: "/WORKSCHEDULE",
    },
    {
      id: "WORKSCHEDULE",
      videoSrc: "/work_schedule_video.mp4",
      title: "Work Schedule",
      link: "/WORK_SCHEDULE",
      info: `Manage your work schedule...`,
      technologies: ["React", "Node.js", "Express"],
      credits: ["Development Team", "Design : Designer Name"],
      content: [
        "image:/work_schedule_screen1@2x.png",
        "text:Overview of the work schedule project.",
        "image:/work_schedule_screen2@2x.png",
        "text:Details about features and functionality.",
      ].join(';'),
      prev: "/BAT",
      next: "/ATHING",
    },
    {
      id: "ATHING",
      videoSrc: "/athing_video.mp4",
      title: "Athing",
      link: "/ATHING",
      info: `An innovative solution for...`,
      technologies: ["Vue.js", "Firebase", "CSS"],
      credits: ["Athing Team", "Design : Designer Name"],
      content: [
        "image:/athing_screen1@2x.png",
        "text:Details about Athing project.",
        "image:/athing_screen2@2x.png",
        "text:Further information on Athing.",
      ].join(';'),
      prev: "/WORKSCHEDULE",
      next: "/BAT",
    },
  ];
  
  const [isLoaded, setIsLoaded] = useState(false);

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
        title = "Home";
        metaDescription = "Welcome to the homepage.";
        break;
      // Additional cases for other routes if needed
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

  return (
    <>
      <NavigationBar1 />
      {!isLoaded && <LoadingPage onLoaded={() => setIsLoaded(true)} />}
      <Routes>
        <Route path="/" element={<HomeScreen onLoaded={() => setIsLoaded(true)} />} />
        {projectData.map((project) => (
          <Route
            key={project.id}
            path={`/${project.id}`}
            element={
              <Project1
                {...project}
              />
            }
          />
        ))}
      </Routes>
      <Contact1 />
    </>
  );
}

export default App;
