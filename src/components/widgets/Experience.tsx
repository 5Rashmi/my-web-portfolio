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
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {experienceData.map((item, index) => (
            <ExperienceCard
              key={index}
              data={item}
              onClick={() => setActiveExperience(item)}
            />
          ))}
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
