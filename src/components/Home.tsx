import { useState } from "react";
import Icons from "./icons/Icons";
import WindowManager from "../ui/Window/WindowManager";
import AboutMe from "./widgets/AboutMe";
import Skills from "./widgets/Skills";
import Projects from "./widgets/Projects";
import Experience from "./widgets/Experience";
import SocialMedia from "./widgets/SocialMedia";

const Home = () => {
  const [openWindows, setOpenWindows] = useState<string[]>([]);

  const handleIconClick = (label: string) => {
    setOpenWindows((prev) => (prev.includes(label) ? prev : [...prev, label]));
  };

  const handleCloseWindow = (label: string) => {
    setOpenWindows((prev) => prev.filter((w) => w !== label));
  };

  return (
    <>
      <Icons onIconClick={handleIconClick} />
      <WindowManager
        openWindows={openWindows}
        closeWindow={handleCloseWindow}
      />
      <AboutMe />
      <Skills />
      <Experience />
      <Projects />
      <SocialMedia />
    </>
  );
};

export default Home;
