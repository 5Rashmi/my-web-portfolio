import BackgroundImage from "./BackgroundImage"; // Import background component
import React, { useState } from "react";
import { bgImg } from "../datas/wallpaper.data";
import WallpaperSection from "./WallpaperSection";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [bg, setBg] = useState(bgImg[0]);

  return (
    <div className="relative h-screen w-screen overflow-hidden">
      <BackgroundImage bg={bg} />

      <WallpaperSection setBg={setBg} />

      {/* Page Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default Layout;
