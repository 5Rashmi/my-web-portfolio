import { useEffect } from "react";

const VideoCard = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "//pl27149191.profitableratecpm.com/cd/18/e1/cd18e19138e0e0d0461017b2fb1af98b.js";
    script.async = true;

    document.getElementById("ad-wrapper")?.appendChild(script);
  }, []);

  return (
    <div
      id="ad-wrapper"
      className="w-full max-w-[728px] h-[300px] mx-auto bg-zinc-900 rounded-lg shadow-lg flex items-center justify-center"
    >
      <p className="text-white text-sm">Loading ad...</p>
    </div>
  );
};

export default VideoCard;
