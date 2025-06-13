import { socialMediaData } from "../../datas/social-media.data";
import SocialMediaCard from "../../ui/cards/SocialMediaCard";
import Widget from "../../ui/widgets/Widget";

const SocialMedia = () => {
  return (
    <Widget left="left-[74%]" top="top-4">
      <div className="flex flex-col">
        <div className="text-center relative mb-6">
          <h2 className="text-md md:text-md font-extrabold text-white tracking-wide relative z-10">
            <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text">
              Connect With Me
            </span>
          </h2>
          <div className="absolute inset-x-0 top-1/2 h-[2px] bg-gradient-to-r from-transparent via-purple-500 to-transparent blur-sm"></div>
        </div>
        <div className="flex flex-row gap-1.5">
          {socialMediaData.map(({ Icon, link }, index) => (
            <SocialMediaCard key={index} Icon={Icon} link={link} />
          ))}
        </div>
      </div>
    </Widget>
  );
};

export default SocialMedia;
