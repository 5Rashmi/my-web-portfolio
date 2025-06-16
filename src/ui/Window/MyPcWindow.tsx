import React from "react";
import WindowWrapper from "./WindowWrapper";
import type { WindowProps } from "../../types/windowProps";
import { foldersData } from "../../datas/folders.data";

const MyPcWindow: React.FC<WindowProps> = ({ onClose }) => {
  return (
    <WindowWrapper title="Rashmi's PC" onClose={onClose}>
      <div className="flex flex-wrap gap-6">
        {foldersData.map((d, index) => (
          <div
            key={index}
            className="cursor-pointer p-0 m-0 w-fit flex flex-col items-center"
          >
            <img
              src="/icons/ui-icons/folder.png"
              alt="folder"
              className="w-12 h-12 items-center"
            />
            <p className="mt-1 text-center text-white">{d.name}</p>
          </div>
        ))}
      </div>
    </WindowWrapper>
  );
};

export default MyPcWindow;
