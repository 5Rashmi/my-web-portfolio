import React from "react";
import WindowWrapper from "./WindowWrapper";
import type { WindowProps } from "../../types/windowProps";
import type { ProjectType } from "../../types/projectType";

interface ProjectProps extends WindowProps {
  project: ProjectType;
}

const ProjectWindow: React.FC<ProjectProps> = ({ project, onClose }) => {
  return (
    <WindowWrapper title="Projects" onClose={onClose}>
      <div className="bg-white/5 backdrop-blur-xl p-6 rounded-2xl max-h-[35rem] overflow-y-auto scrollbar-custom shadow-2xl border border-white/10 text-white space-y-6 transition duration-300">
        {/* Header with Icon and Info */}
        <div className="flex items-center gap-5">
          <img
            src={project.Icon}
            alt={project.title}
            className="w-20 h-20 object-contain drop-shadow-lg"
          />
          <div>
            <h2 className="text-2xl font-bold tracking-wide">
              {project.title}
            </h2>
            <p className="text-xs text-gray-400 uppercase tracking-wider">
              {project.type}
            </p>
          </div>
        </div>

        {/* Description */}
        <p className="text-sm text-gray-300 leading-relaxed whitespace-pre-line">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div>
          <h4 className="text-xs text-gray-500 uppercase mb-2">Tech Stack</h4>
          <div className="flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-xs rounded-full bg-white/10 backdrop-blur-sm border border-white/10 hover:bg-white/20 transition"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Action Links */}
        <div className="flex flex-wrap gap-4">
          {project.githubLink && (
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-lg text-xs bg-gradient-to-tr from-white/10 to-white/5 border border-white/10 hover:bg-white/20 transition"
            >
              🔗 GitHub Repo
            </a>
          )}

          {project.deploy && (
            <a
              href={project.deploy}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-lg text-xs bg-emerald-500/90 hover:bg-emerald-400 text-white transition"
            >
              🚀 Live Demo
            </a>
          )}
        </div>
      </div>
    </WindowWrapper>
  );
};

export default ProjectWindow;
