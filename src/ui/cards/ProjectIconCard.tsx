import React from "react";
import type { ProjectIconCardProps } from "../../types/ProjectIconCardProps";

const ProjectIconCard: React.FC<ProjectIconCardProps> = ({
  title,
  type,
  Icon,
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className="flex flex-col items-center w-24 p-2 cursor-pointer hover:bg-white/10 rounded-lg transition"
    >
      <div className="w-12 h-12 bg-white/10 rounded shadow flex items-center justify-center text-white text-lg">
        <img src={Icon} alt={title} className="w-12 h-12 object-contain" />
      </div>
      <div className="text-xs text-center text-white mt-1">{title}</div>
      <div className="text-[10px] text-gray-400">{type}</div>
    </div>
  );
};

export default ProjectIconCard;
