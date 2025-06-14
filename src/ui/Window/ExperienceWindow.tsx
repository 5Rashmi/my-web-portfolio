import React from "react";
import type { WindowProps } from "../../types/windowProps";
import type { ExperienceType } from "../../types/experienceType";
import WindowWrapper from "./WindowWrapper";

interface ExperienceProps extends WindowProps {
  experience: ExperienceType;
}

const ExperienceWindow: React.FC<ExperienceProps> = ({
  experience,
  onClose,
}) => {
  return (
    <WindowWrapper title="Experience" onClose={onClose}>
      <div className="bg-white/5 backdrop-blur-xl p-6 rounded-2xl max-h-[35rem] overflow-y-auto scrollbar-custom shadow-2xl border border-white/10 text-white space-y-6 transition duration-300">
        {/* Header */}
        <div className="flex items-center gap-5">
          <div className="w-20 h-20 rounded-full bg-white/10 p-2 shadow-inner ring-1 ring-white/10">
            <img
              src={experience.Icon}
              alt={experience.jobRole}
              className="w-full h-full object-contain drop-shadow-md"
            />
          </div>
          <div className="space-y-1">
            <h2 className="text-2xl font-bold tracking-wide leading-tight text-white drop-shadow-sm">
              {experience.jobRole}
            </h2>
            <h3 className="text-md font-semibold text-zinc-300">
              {experience.company}
            </h3>
            <p className="text-xs text-gray-400 uppercase tracking-widest">
              {experience.jobType}
            </p>
          </div>
        </div>

        {/* Description */}
        <p className="text-[15px] text-zinc-300 leading-7 whitespace-pre-line tracking-wide font-light">
          {experience.description}
        </p>

        {/* Skills Section */}
        <div>
          <h4 className="text-xs text-gray-500 uppercase mb-3 tracking-widest">
            Skills
          </h4>
          <div className="flex flex-wrap gap-2 text-xs">
            {experience.skills?.split(",").map((skill) => (
              <span
                key={skill}
                className="bg-gradient-to-br from-zinc-100/20 to-zinc-300/10 dark:from-zinc-800/40 dark:to-zinc-700/30 px-3 py-1 rounded-full text-zinc-300 border border-white/10 shadow-sm backdrop-blur-md"
              >
                {skill.trim()}
              </span>
            ))}
          </div>
        </div>
      </div>
    </WindowWrapper>
  );
};

export default ExperienceWindow;
