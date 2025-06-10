import Draggable from "react-draggable";
import { bgImg } from "../datas/wallpaper.data";

type WallpaperSectionProps = {
  setBg?: (bg: string) => void;
};

const WallpaperSection: React.FC<WallpaperSectionProps> = ({ setBg }) => {
  console.log("bgImg:", bgImg);

  return (
    <div>
      {/* Wallpaper Selection UI */}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-4 bg-black/50 p-3 rounded-lg">
        {bgImg.map((b, index) => (
          <div
            key={index}
            onClick={() => setBg?.(b)}
            style={{
              backgroundImage: `url(${b})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            className="w-20 h-12 cursor-pointer border border-gray-500 rounded-md hover:opacity-80"
          ></div>
        ))}
      </div>
    </div>
  );
};

export default WallpaperSection;
