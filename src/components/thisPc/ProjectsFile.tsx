import React from "react";
import type { ProjectType } from "../../types/projectType";

type Props = {
  data: ProjectType;
};

const ProjectsFile: React.FC<Props> = ({ data }) => {
  return (
    <div className="p-6 bg-[#1e1e2f] rounded-xl shadow-md text-white space-y-3">
      <div className="flex items-center gap-3">
        <img src={data.Icon} alt="icon" className="w-10 h-10" />
        <div>
          <h2 className="text-xl font-semibold text-blue-400">{data.title}</h2>
          <p className="text-sm text-gray-400 italic">
            {data.type} • {data.status}
          </p>
        </div>
      </div>

      <p className="text-sm text-gray-300">{data.description}</p>

      <div>
        <p className="text-sm font-medium text-gray-400">Tech Stack:</p>
        <div className="flex flex-wrap gap-2 mt-1">
          {data.stack.map((tech, i) => (
            <span
              key={i}
              className="px-2 py-1 text-xs bg-gray-700 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className="text-sm text-blue-400 space-x-4">
        {data.githubLink && (
          <a href={data.githubLink} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        )}
        {data.deploy && (
          <a href={data.deploy} target="_blank" rel="noopener noreferrer">
            Live
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectsFile;
