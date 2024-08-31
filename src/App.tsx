import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import HeroSection1 from "./components/HeroSection1";
import MySkills1 from "./components/MySkills1";
import NavigationBar1 from "./components/NavigationBar1";
import Project1 from "./pages/Project1";

function App() {
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

  return (
    <>
    <NavigationBar1/>

    <Routes>
      <Route path="/" element={<div><HeroSection1 /><MySkills1/></div>} />
      <Route path="/BAT" element={<Project1 />} />
    </Routes>
    </>
  );
}
export default App;
