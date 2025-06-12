import { bgImg } from "../datas/wallpaper.data";

type WallpaperSectionProps = {
  setBg?: (bg: string) => void;
};

const WallpaperSection: React.FC<WallpaperSectionProps> = ({ setBg }) => {
  return (
    <div>
      {/* Wallpaper Selection UI */}
      <div className="relative mx-auto grid grid-cols-5 grid-flow-row auto-rows-max gap-y-4 gap-x-5 bg-black/50 p-3 rounded-lg z-50 max-w-fit">
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
