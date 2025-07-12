import Widget from "../../ui/widgets/Widget";
import SkillsCard from "../../ui/cards/SkillsCard";

const Skills = () => {
  return (
    <Widget left="left-[42%]" top="top-4">
      <div className="mb-4 flex flex-col text-white text-xs uppercase tracking-wider font-bold">
        <span className="flex flex-col px-2 py-1 bg-white/5 border border-white/10 rounded-l-md backdrop-blur-sm">
          Tech
        </span>
        <span className="flex flex-col px-2 py-1 bg-gradient-to-r from-indigo-500 to-fuchsia-500 text-black rounded-r-md shadow-sm">
          Skills
        </span>
      </div>

      <SkillsCard />
    </Widget>
  );
};

export default Skills;
