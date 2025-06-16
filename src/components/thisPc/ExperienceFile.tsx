import type React from "react";
import type { ExperienceType } from "../../types/experienceType";

type Props = {
  data: ExperienceType;
};
const ExperienceFile: React.FC<Props> = ({ data }) => {
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold">
        {data.jobRole} @ {data.company}
      </h2>
      <p className="text-sm text-gray-500">
        {data.duration} ● {data.location}
      </p>
      <p className="mt-2">{data.description}</p>
      <p className="mt-2">
        <strong>Skills:</strong> {data.skills}
      </p>
      <div className="mt-2">
        🔗{" "}
        <a href={data.websiteLink} target="_blank" className="text-blue-600">
          Website
        </a>
        {" | "}
        <a href={data.linkedinLink} target="_blank" className="text-blue-600">
          LinkedIn
        </a>
      </div>
    </div>
  );
};

export default ExperienceFile;
