import { useState } from "react";
import { experienceData } from "../../datas/experience.data";
import ExperienceCard from "../../ui/cards/ExperienceCard";
import Widget from "../../ui/widgets/Widget";
import type { ExperienceType } from "../../types/experienceType";
import ExperienceWindow from "../../ui/Window/ExperienceWindow";

const Experience = () => {
  const [activeExperience, setActiveExperience] =
    useState<ExperienceType | null>(null);

  return (
    <>
      <Widget left="left-[12em]" top="top-[27%]">
        <div className="flex flex-col">
          <div className="text-center relative mb-2">
            <div className="flex flex-col text-white w-fit text-xs uppercase tracking-wider font-bold mx-auto">
              <span className="flex flex-col px-2 py-1 bg-gradient-to-r from-indigo-500 to-fuchsia-500 text-black rounded-r-md shadow-sm">
                Experience
              </span>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {experienceData.map((item, index) => (
              <ExperienceCard
                key={index}
                data={item}
                onClick={() => setActiveExperience(item)}
              />
            ))}
          </div>
        </div>
      </Widget>

      {activeExperience && (
        <ExperienceWindow
          experience={activeExperience}
          onClose={() => setActiveExperience(null)}
        />
      )}
    </>
  );
};

export default Experience;
