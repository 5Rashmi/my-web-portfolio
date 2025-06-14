import { resumeData } from "../../datas/resume.data";
import Widget from "../../ui/widgets/Widget";
import { FaLaptopCode } from "react-icons/fa";

const AboutMe = () => {
  return (
    <Widget
      left="left-[12em]"
      top="top-4"
      className="bg-gradient-to-br from-[#1f1c2c] via-[#7d7994] to-[#1f1c2c] text-white rounded-xl p-5 w-[340px] h-[200px] shadow-2xl flex flex-col justify-between font-mono"
    >
      {/* Top Row */}
      <div className="relative">
        <div className="flex justify-between items-center text-xs text-white/50">
          <span>ABOUT ME #RASHMI</span>
        </div>

        <a
          href={resumeData}
          download
          className="absolute top-0 left-[140%] bg-white/10 backdrop-blur-md text-white px-3 py-1 rounded text-xs border border-white/20 hover:bg-white/20 transition"
        >
          Resume
        </a>
      </div>

      {/* Middle Row */}
      <div className="flex items-center gap-3">
        {/* Icon Chip */}
        <div className="bg-white/10 p-2 rounded-md">
          <FaLaptopCode className="text-white text-lg" />
        </div>

        {/* Text Info */}
        <div>
          <h2 className="text-lg font-semibold">Rashmi N</h2>
          <p className="text-sm text-white/80">Web Developer</p>
          <p className="text-sm text-white/80">React • JavaScript • Frontend</p>
        </div>
      </div>

      {/* Bottom */}
      <div className="flex justify-between text-[10px] text-white/40 mt-1">
        <span>Passionate Coder</span>
        <span>🚀 Always Exploring</span>
      </div>
    </Widget>
  );
};

export default AboutMe;
