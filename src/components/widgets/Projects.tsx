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
      <Widget left="left-[48%]" top="top-[20%]">
        <div className="flex flex-col">
          <div className="text-center relative mb-2">
            <div className="flex flex-col text-white w-fit text-xs uppercase tracking-wider font-bold mx-auto">
              <span className="flex flex-col px-2 py-1 bg-gradient-to-r from-indigo-500 to-fuchsia-500 text-black rounded-r-md shadow-sm">
                Projects
              </span>
            </div>
          </div>
          <div className="flex flex-wrap cursor-move">
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
