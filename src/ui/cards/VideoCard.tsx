import { useEffect } from "react";

const VideoCard = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src =
      "//www.highperformanceformat.com/45172ca47cf67a8739ad6adcaea61534/invoke.js";
    script.async = true;

    const container = document.getElementById("ad-container");
    if (container) {
      container.innerHTML = "";
      container.appendChild(script);
    }
  }, []);

  return (
    <div className="w-full max-w-[728px] mx-auto p-4 bg-zinc-900 rounded-lg shadow">
      <div id="ad-container"></div>
    </div>
  );
};

export default VideoCard;
