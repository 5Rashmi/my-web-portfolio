type BaseExperience = {
    duration: string,
        company: string,
        jobType: "Internship" | "Full Time" | "Part Time",
        jobRole: string,
        description: string,
        skills?: string,
        Icon: string,
        location: "On Site" | "Remote",
        linkedinLink?: string,
        websiteLink?: string
}

type RemoteExperience = BaseExperience & {
    location: "Remote";
    address?: never;
}

type OnSiteExperience = BaseExperience & {
    location: "On Site";
    address: string;
}

export type ExperienceType = RemoteExperience | OnSiteExperience;