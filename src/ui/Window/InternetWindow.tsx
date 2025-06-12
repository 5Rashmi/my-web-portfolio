import React from "react";
import WindowWrapper from "./WindowWrapper";
import type { WindowProps } from "../../types/windowProps";
import InternetPage from "../../components/internet/InternetPage";

const InternetWindow: React.FC<WindowProps> = ({ onClose }) => {
  return (
    <WindowWrapper title="Internet" onClose={onClose}>
      <InternetPage />
    </WindowWrapper>
  );
};

export default InternetWindow;
