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
      videoSrc: "/BAT_HD.mp4",
      title: "BAT",
      link: "www.brasseria-augusta-taurinorum.it",
      info: `Brasseria Augusta Taurinorum is a passion project born from a deep love of rock music and craft brewing, created by two lifelong friends from Turin. This landing page invites visitors to dive into the unique story and culture behind their beers, featuring immersive videos and curated Spotify playlists that capture the spirit of the founders. A highlight of the site is the dedicated beer section, where users can interactively explore the  eye-catching can designs while discovering each beer’s story, characteristics, and food pairings.`,
      technologies: ["HTML / CSS / JS", "React", "Three.js"],
      credits: ["Lipton Teas & Infusions", "Design : Alter Bureau", "Développement : Troa"],
      content: [
        // "image:/screen1@2x.png",
        // "text:Description of the project.",
        // "image:/screen2@2x.png",
        // "text:Additional details about the project.",
      ].join(';'),
      prev: "/ATHING",
      next: "/WORKSCHEDULE",
    },
    {
      id: "WORKSCHEDULE",
      videoSrc: "/WS_HD.mp4",
      title: "Work Schedule",
      link: "https://tabellalavoro.netlify.app/",
      info: `Work Schedule is a full-stack app designed to help users track their daily work hours and automatically calculate overtime, sick days, and leave. I developed this project to provide a simple and efficient solution for a family member who needed an easier way to manage their working hours. The app includes a login and register system, real-time data entry for daily hours, dynamic graphs that visualize overtime trends, and a comprehensive table to review all work records in detail.Creating this app showed me how the right set of tools can enable the rapid delivery of a functional, well-designed product without compromising on the user experience.`,
      technologies: ["React", "Node.js", "Netlify"],
      credits: ["Developement: me", "Design : me"],
      content: [
        // "image:/work_schedule_screen1@2x.png",
        // "text:Overview of the work schedule project.",
        // "image:/work_schedule_screen2@2x.png",
        // "text:Details about features and functionality.",
      ].join(';'),
      prev: "/BAT",
      next: "/ATHING",
    },
    {
      id: "ATHING",
      videoSrc: "/AT_HD.mp4",
      title: "AThing",
      link: "",
      info: `Athing is a task management app designed to help users fight FOMO (Fear of Missing Out). Created in response to today’s overwhelming demands and the struggle to prioritize self-care, Athing encourages users to appreciate even the smallest achievements. The app allows you to insert and categorize tasks, select your mood from a collection of humorous animal memes, and later suggests self-care activities based on the way you feel. AThing also features a playful appreciation page that boosts your self-confidence by using Gen-Z humor.`,
      technologies: ["Kotlin", "Firebase", "Android"],
      credits: ["Development: ME", "Design : Designer Name"],
      content: [
        // "image:/athing_screen1@2x.png",
        // "text:Details about Athing project.",
        // "image:/athing_screen2@2x.png",
        // "text:Further information on Athing.",
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
