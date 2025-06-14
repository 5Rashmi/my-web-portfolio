import React from "react";
import type { ExperienceType } from "../../types/experienceType";

interface Props {
  data: ExperienceType;
  onClick: () => void;
}

const ExperienceCard: React.FC<Props> = ({ data, onClick }) => {
  return (
    <div className="flex items-start relative">
      {/* Card content */}
      <div
        onClick={onClick}
        className="ml-2 mb-2 p-3 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 rounded-lg shadow-sm hover:shadow-md transition cursor-pointer w-full"
      >
        <div className="flex items-center gap-2 mb-1">
          <img src={data.Icon} alt="icon" className="w-5 h-5 object-contain" />
          <h3 className="text-[12px] font-semibold">{data.jobRole}</h3>
          <span className="text-[10px] bg-zinc-200 dark:bg-zinc-700 text-zinc-600 dark:text-zinc-300 px-2 py-0.5 rounded-md ml-auto">
            {data.jobType}
          </span>
        </div>
        <p className="text-xs text-zinc-500 dark:text-zinc-400">
          {data.company}
        </p>
        <p className="text-[11px] text-zinc-400 mt-1">{data.duration}</p>
      </div>
    </div>
  );
};

export default ExperienceCard;
