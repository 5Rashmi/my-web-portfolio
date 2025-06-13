import React from "react";
import WindowWrapper from "./WindowWrapper";
import type { WindowProps } from "../../types/windowProps";

const MyPcWindow: React.FC<WindowProps> = ({ onClose }) => {
  return (
    <WindowWrapper title="Rashmi's PC" onClose={onClose}>
      <h1></h1>
    </WindowWrapper>
  );
};

export default MyPcWindow;
