// App.tsx
import { useEffect, useState } from "react";
import { Routes, Route, useNavigationType, useLocation } from "react-router-dom";
import NavigationBar from "./components/Misc/NavigationBar";
import ProjectPage from "./pages/ProjectPage";
import Contact from "./components/HomePage/Contact";
import HomePage from "./pages/HomePage";
import Spinner from "./components/Misc/Spinner";

function App() {
  const [loading, setLoading] = useState(true);
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  const projectData = [
    {
      id: "BAT",
      videoSrc: "/previews/BAT_HD.mp4",
      title: "BAT",
      link: "https://www.brasseria-augusta-taurinorum.it/",
      info: `Brasseria Augusta Taurinorum is a passion project born from a deep love of rock music and craft brewing, created by two lifelong friends from Turin. This landing page invites visitors to dive into the unique story and culture behind their beers, featuring immersive videos and curated Spotify playlists that capture the spirit of the founders. A highlight of the site is the dedicated beer section, where users can interactively explore the  eye-catching can designs while discovering each beer’s story, characteristics, and food pairings.`,
      technologies: ["React", "Three.js","TypeScript", "HTML", "CSS",  "Cookie Policy", "Figma", "Blender"],
      credits: ["Copywriting: Chiara Catania, Valeria Sampino", "Design: Chiara Catania, Valeria Sampino, Me", "Development: Me"],
      content: [
        "text:SCREENSHOTS",
        "image:/screenshots/BAT_Home.png",
        "image:/screenshots/BAT_Playlist.png",
        "image:/screenshots/BAT_Carousel.png",
        "image:/screenshots/BAT_Header.png",
        "image:/screenshots/BAT_Beer.png",
        "image:/screenshots/BAT_Abbinamenti.png",
        "image:/screenshots/BAT_Sidebar.png",
      ].join(';'),
      prev: "/AThing",
      next: "/WorkSchedule",
    },
    {
      id: "WORKSCHEDULE",
      videoSrc: "/previews/WS_HD.mp4",
      title: "Work Schedule",
      link: "https://tabellalavoro.netlify.app/",
      info: `Work Schedule is a full-stack app designed to help users track their daily work hours and automatically calculate overtime, sick days, and leave. I developed this project to provide a simple and efficient solution for a family member who needed an easier way to manage their working hours. The app includes login and register pages, an insertion page to enter daily hours, dynamic graphs that visualize overtime trends, and a table to review all work records in detail. Making this app taught me how the right set of tools can facilitate the swift delivery of a well-designed, functional product without sacrificing the user experience.`,
      technologies: ["React", "Node.js", "MongoDB", "JWT", "Netlify", "Render"],
      credits: ["Design: me", "Developement: me"],
      content: [
        "text:SCREENSHOTS",
        "image:/screenshots/WS_Home.png",
        "image:/screenshots/WS_Insert.png",
        "image:/screenshots/WS_Table.png",
        "image:/screenshots/WS_Graph.png",
      ].join(';'),
      prev: "/BAT",
      next: "/AThing",
    },
    {
      id: "ATHING",
      videoSrc: "/previews/AT_HD.mp4",
      title: "AThing",
      link: "",
      info: `Athing is a task management app designed to help users fight FOMO (Fear of Missing Out). Created in response to today’s overwhelming demands and the struggle to prioritize self-care, Athing encourages users to appreciate even the smallest achievements. The app allows you to insert and categorize tasks, select your mood from a collection of humorous animal memes, and later suggests self-care activities based on the way you feel. AThing also features a playful appreciation page that boosts your self-confidence by using Gen-Z humor.`,
      technologies: ["Kotlin", "Firebase", "Gemini API", "AI", "Android"],
      credits: ["Design: me", "Developement: me"],
      content: [
        "text:SCREENSHOTS",
        "image_small:/screenshots/AT_Splash.jpg",
        "image_small:/screenshots/AT_Home.jpg",
        "image_small:/screenshots/AT_AThing.jpg",
        "image_small:/screenshots/AT_Add.jpg",
        "image_small:/screenshots/AT_Profile.jpg",
        "image_small:/screenshots/AT_Appreciation.jpg",
      ].join(';'),
      prev: "/WorkSchedule",
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
        title = "VP | Portfolio";
        metaDescription = "Welcome to my portfolio.";
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
      <NavigationBar />
      {!isLoaded && <Spinner onLoaded={() => setIsLoaded(true)} />}
      <Routes>
        <Route path="/" element={<HomePage onLoaded={() => setIsLoaded(true)} />} />
        {projectData.map((project) => (
          <Route
            key={project.id}
            path={`/${project.id}`}
            element={
              <ProjectPage
                {...project}
              />
            }
          />
        ))}
      </Routes>
      <Contact />
    </>
  );
}

export default App;
