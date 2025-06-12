import React, { useState } from "react";
import WindowWrapper from "./WindowWrapper";
import type { WindowProps } from "../../types/windowProps";
import useMusic from "../../hooks/useMusic";
import MusicCard from "../cards/MusicCard";
import Search from "../search/Search";

const MusicWindow: React.FC<WindowProps> = ({ onClose }) => {
  const [query, setQuery] = useState("");
  const tracks = useMusic(query);
  return (
    <WindowWrapper title="Music" onClose={onClose}>
      <Search
        type="text"
        placeholder="Search for a song or artist"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <div className="h-[30rem] overflow-y-auto scrollbar-custom">
        <div className="space-y-4">
          {tracks.map((t) => (
            <MusicCard
              key={t.id}
              title={t.title}
              artist={t.artist}
              albumArt={t.albumArt}
              previewUrl={t.preview}
            />
          ))}
        </div>
      </div>
    </WindowWrapper>
  );
};

export default MusicWindow;
