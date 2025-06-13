import { skillsData } from "../../datas/skills.data";
import type { Skill } from "../../types/skillType";

const SkillsCard = () => {
  return (
    <div className="flex flex-wrap gap-4 justify-center items-center text-[26px]">
      {skillsData.map(({ name, Icon, color }: Skill, index: number) => (
        <div
          key={index}
          className="group relative p-2 rounded-full hover:bg-white/5 transition duration-200 hover:shadow-md"
        >
          <Icon
            className={`${color} group-hover:scale-110 transition-transform duration-150`}
          />
          <span className="absolute bottom-full mb-1 left-1/2 -translate-x-1/2 scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-200 bg-black text-white text-[10px] px-2 py-0.5 rounded shadow-md z-10 whitespace-nowrap">
            {name}
          </span>
        </div>
      ))}
    </div>
  );
};
export default SkillsCard;
