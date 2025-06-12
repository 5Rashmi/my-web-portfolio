import React, { useRef } from "react";
import type { MusicCardProps } from "../../types/MusicCardProps";

let currentAudio: HTMLAudioElement | null = null;

const MusicCard: React.FC<MusicCardProps> = ({
  title,
  artist,
  albumArt,
  previewUrl,
}) => {
  const audioRef = useRef<HTMLAudioElement>(null);

  const handlePlay = () => {
    if (currentAudio && currentAudio !== audioRef.current) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
    }
    currentAudio = audioRef.current;
  };

  return (
    <div className="flex items-center p-4 bg-black/50 rounded-lg text-white shadow max-w-md z-20">
      <img src={albumArt} alt={title} className="w-16 h-16 rounded-md" />
      <div className="ml-4 flex-1">
        <h3 className="text-sm font-semibold">{title}</h3>
        <p className="text-xs text-gray-300">{artist}</p>
        <audio
          controls
          ref={audioRef}
          className="w-full mt-2"
          onPlay={handlePlay}
        >
          <source src={previewUrl} type="audio/mpeg" />
        </audio>
      </div>
    </div>
  );
};

export default MusicCard;
