import React from "react";
import WindowWrapper from "./WindowWrapper";
import type { WindowProps } from "../../types/windowProps";
import CalculatorCard from "../cards/CalculatorCard";

const CalculatorWindow: React.FC<WindowProps> = ({ onClose }) => {
  return (
    <WindowWrapper title="calculator" onClose={onClose}>
      <CalculatorCard />
    </WindowWrapper>
  );
};

export default CalculatorWindow;
