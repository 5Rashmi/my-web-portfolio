import type React from "react";

interface BackgroundImageProps {
  bg: string;
}
const BackgroundImage: React.FC<BackgroundImageProps> = ({ bg }) => {
  return (
    <div
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="absolute top-0 left-0 w-full h-screen -z-10 transition-all duration-500"
    ></div>
  );
};

export default BackgroundImage;
