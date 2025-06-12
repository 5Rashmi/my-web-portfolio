import React from "react";
import WindowWrapper from "./WindowWrapper";
import CalendarCard from "../cards/CalendarCard";
import type { WindowProps } from "../../types/windowProps";

const CalendarWindow: React.FC<WindowProps> = ({ onClose }) => {
  return (
    <WindowWrapper title="calendar" onClose={onClose}>
      <CalendarCard />
    </WindowWrapper>
  );
};

export default CalendarWindow;
