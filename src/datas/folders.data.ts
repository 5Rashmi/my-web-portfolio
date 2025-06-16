import type { FolderType } from "../types/folderType";
import { experienceData } from "./experience.data";
import ExperienceFile from "../components/thisPc/ExperienceFile";
import type { ExperienceType } from "../types/experienceType";

export const foldersData: FolderType<ExperienceType>[] = [
    {
        name: "Experience",
        files: experienceData.map((exp) => ({
            name: `${exp.company}.txt`,
            component: ExperienceFile,
            data: exp,
        }))
    },
    {
        name: "Experience",
        files: experienceData.map((exp) => ({
            name: `${exp.company}.txt`,
            component: ExperienceFile,
            data: exp,
        }))
    },
    // {
    //     name: "Experience",
    //     files: experienceData.map((exp) => ({
    //         name: `${exp.company}.txt`,
    //         component: ExperienceFile,
    //         data: exp,
    //     }))
    // },
    // {
    //     name: "Experience",
    //     files: experienceData.map((exp) => ({
    //         name: `${exp.company}.txt`,
    //         component: ExperienceFile,
    //         data: exp,
    //     }))
    // }
]