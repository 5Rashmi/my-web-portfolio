import React, { useEffect, useState } from "react";
import { getDate } from "../../utils/date";
import WeatherDisplay from "../../components/weather/WeatherDisplay";

interface ToolbarProps {
  children: React.ReactNode;
}

const Toolbar: React.FC<ToolbarProps> = ({ children }) => {
  const [date, setDate] = useState(getDate());

  useEffect(() => {
    const interval = setInterval(() => {
      setDate(getDate());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed bottom-0 left-0 w-full h-12 bg-black/80 flex items-center justify-between px-4 z-50 text-white backdrop-blur-md border-t border-gray-600/30">
      {/* Left side */}
      <div className="flex items-center gap-6">{children}</div>

      {/* Right side */}
      <div className="flex items-center gap-4">
        <WeatherDisplay />

        <div className="text-right leading-tight text-sm">
          <div>{date.split(",")[1]}</div>
          <div className="text-gray-300 text-xs">{date.split(",")[0]}</div>
        </div>
      </div>
    </div>
  );
};

export default Toolbar;
