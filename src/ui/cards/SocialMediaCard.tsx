import type React from "react";
import type { SocialMediaType } from "../../types/socialMediaType";

const SocialMediaCard: React.FC<SocialMediaType> = ({ Icon, link }) => {
  return (
    <a
      href={
        link.startsWith("http") || link.startsWith("mailto")
          ? link
          : `https://${link}`
      }
      target="_blank"
      rel="noopener noreferrer"
      className="group relative w-14 h-14 flex items-center justify-center rounded-full border border-white/10 bg-white/5 backdrop-blur-md transition hover:ring-2 hover:ring-fuchsia-500/50 hover:scale-110 hover:shadow-xl"
    >
      <Icon className="text-xl text-white transition group-hover:text-fuchsia-500" />
      <span className="absolute inset-0 rounded-full animate-pulse border border-fuchsia-500/10 pointer-events-none"></span>
    </a>
  );
};

export default SocialMediaCard;
