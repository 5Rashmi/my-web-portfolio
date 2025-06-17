import React from "react";
import type { EducationType } from "../../types/EducationType";

type Props = {
  data: EducationType;
};

const EducationFile: React.FC<Props> = ({ data }) => {
  return (
    <div className="p-6 shadow-md text-white space-y-2">
      <h2 className="text-2xl font-semibold text-blue-400">
        {data.instutionName}
      </h2>

      {data.program && (
        <p className="text-sm text-gray-300 italic">{data.program}</p>
      )}

      <p className="text-sm text-gray-400">
        {data.duration} <span className="text-gray-500">•</span> {data.location}
      </p>

      <div className="mt-3 space-y-1 text-sm">
        <p>
          <span className="font-medium text-gray-300">Type:</span> {data.type}
        </p>
        <p>
          <span className="font-medium text-gray-300">Status:</span>{" "}
          {data.status}
        </p>
        <p>
          <span className="font-medium text-gray-300">Result:</span>{" "}
          {data.Result}
        </p>
      </div>
    </div>
  );
};

export default EducationFile;
