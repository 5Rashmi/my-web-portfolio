import type React from "react";
import type { EducationType } from "../../types/EducationType";
import HTMLFlipBook from "react-pageflip";

type Props = {
  educationData: EducationType[];
};

const EducationCard: React.FC<Props> = ({ educationData }) => {
  return (
    <HTMLFlipBook
      size="stretch"
      width={240}
      height={320}
      minWidth={220}
      maxWidth={260}
      minHeight={300}
      maxHeight={340}
      showCover={true}
      mobileScrollSupport={true}
      className="shadow-2xl rounded-lg"
      startPage={0}
      drawShadow={true}
      flippingTime={900}
      useMouseEvents={true}
      clickEventForward={true}
      usePortrait={true}
      startZIndex={0}
      style={{}}
      autoSize={true}
      maxShadowOpacity={0.5}
      swipeDistance={30}
      showPageCorners={true}
      disableFlipByClick={false}
    >
      {/* 📘 Cover Page */}
      <div className="relative flex flex-col justify-center items-center bg-gradient-to-tr from-[#162142] to-[#142a37] text-white rounded-lg px-4 py-8 text-center overflow-hidden">
        {/* Grainy texture */}
        <div className="absolute inset-0 bg-[url('/grain.png')] opacity-[0.07] mix-blend-overlay pointer-events-none" />

        <div className="flex flex-col items-center text-center z-10">
          <div className="text-3xl font-extrabold text-white drop-shadow tracking-widest font-serif">
            🎓 My Education
          </div>
          <p className="text-[11px] mt-2 text-blue-100 italic tracking-wider">
            Tap to flip through the chapters 📖
          </p>
        </div>
      </div>

      {/* 📄 Education Pages */}
      {educationData.map((edu, index) => (
        <div
          key={index}
          className="bg-zinc-900 p-4 space-y-2 rounded-lg font-sans text-white"
        >
          <h2 className="text-lg font-semibold">{edu.instutionName}</h2>
          <p className="text-sm text-zinc-300">{edu.program}</p>
          <div className="text-xs text-zinc-400 space-y-1 pt-2">
            <p>📍 {edu.location}</p>
            <p>🕒 {edu.duration}</p>
            <p>
              🎓 {edu.type} — {edu.status}
            </p>
            <p>📄 Result: {edu.Result}</p>
          </div>
        </div>
      ))}

      {/* 🎉 End Page */}
      <div className="flex flex-col items-center justify-center bg-zinc-800 p-6 rounded-lg text-white text-sm font-medium text-center">
        🎉 That’s all!
        <br />
        <span className="text-xs mt-2 text-white/70 italic tracking-widest">
          Click on the left to review again
        </span>
      </div>
    </HTMLFlipBook>
  );
};

export default EducationCard;
