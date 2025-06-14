import Widget from "../../ui/widgets/Widget";
import EducationCard from "../../ui/cards/EducationCard";
import { educationData } from "../../datas/education.data";

const Education = () => {
  return (
    <Widget left="left-[80%]" top="top-[20%]">
      <EducationCard educationData={educationData} />
    </Widget>
  );
};

export default Education;
