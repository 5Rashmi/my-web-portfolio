import React from "react";
import WindowWrapper from "./WindowWrapper";
import VideoCard from "../cards/VideoCard";
import type { WindowProps } from "../../types/windowProps";

const VideoWindow: React.FC<WindowProps> = ({ onClose }) => {
  return (
    <WindowWrapper title="video" onClose={onClose}>
      <VideoCard />
    </WindowWrapper>
  );
};

export default VideoWindow;
