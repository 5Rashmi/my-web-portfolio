import { useState } from "react";
import { projectsData } from "../../datas/projects.data";
import type { ProjectType } from "../../types/projectType";
import ProjectIconCard from "../../ui/cards/ProjectIconCard";
import Widget from "../../ui/widgets/Widget";
import ProjectWindow from "../../ui/Window/ProjectWindow";

const Projects = () => {
  const [activeProject, setActiveProject] = useState<ProjectType | null>(null);

  return (
    <>
      <Widget left="left-[42%]" top="top-[25%]">
        <div className="mb-4flex flex-col text-white text-xs uppercase tracking-wider font-bold">
          <span className="flex flex-col px-2 py-1 bg-gradient-to-r from-indigo-500 to-fuchsia-500 text-black rounded-r-md shadow-sm">
            Projects
          </span>
        </div>
        <div className="flex gap-4 flex-wrap cursor-move">
          {projectsData.map((p) => (
            <ProjectIconCard
              key={p.title}
              title={p.title}
              Icon={p.Icon}
              type={p.type}
              onClick={() => setActiveProject(p)}
            />
          ))}
        </div>
      </Widget>

      {activeProject && (
        <ProjectWindow
          project={activeProject}
          onClose={() => setActiveProject(null)}
        />
      )}
    </>
  );
};

export default Projects;
