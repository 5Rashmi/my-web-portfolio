import type { FolderType } from "../types/folderType";
import { experienceData } from "./experience.data";
import ExperienceFile from "../components/thisPc/ExperienceFile";
import type { ExperienceType } from "../types/experienceType";
import { educationData } from "./education.data";
import type { EducationType } from "../types/EducationType";
import EducationFile from "../components/thisPc/Education";
import type { ProjectType } from "../types/projectType";
import { projectsData } from "./projects.data";
import ProjectsFile from "../components/thisPc/ProjectsFile";

export const experienceFolder: FolderType<ExperienceType> = {
        name: "Experience",
        files: experienceData.map((exp) => ({
            name: `${exp.company.replace(/\s+/g, "")}.txt`,
            component: ExperienceFile,
            data: exp
        }))
    }
    
export const educationFolder: FolderType<EducationType> = {
        name: "Education",
        files: educationData.map((edu) => ({
            name: `${edu.instutionName.replace(/\s+/g, "")}.txt`,
            component: EducationFile,
            data: edu,
        }))
    }

export const projectsFolder: FolderType<ProjectType> = {
    name: "Projects",
    files: projectsData.map((proj) => ({
        name: `${proj.title.replace(/\s+/g, "")}.txt`,
        component: ProjectsFile,
        data: proj
    }))
}
export const foldersData = [experienceFolder, educationFolder, projectsFolder];