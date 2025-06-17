import React, { useState } from "react";
import WindowWrapper from "./WindowWrapper";
import type { WindowProps } from "../../types/windowProps";
import { foldersData } from "../../datas/folders.data";

const MyPcWindow: React.FC<WindowProps> = ({ onClose }) => {
  const [activeFolderIndex, setActiveFolderIndex] = useState<number | null>(
    null
  );
  const [activeFile, setActiveFile] = useState<null | {
    component: React.ComponentType<any>;
    data: any;
  }>(null);

  const openFolder = (index: number) => {
    setActiveFolderIndex(index);
    setActiveFile(null);
  };

  const openFile = (file: (typeof foldersData)[0]["files"][0]) => {
    setActiveFile(file);
  };

  const handleBack = () => {
    if (activeFile) {
      setActiveFile(null); // go back to folder view
    } else if (activeFolderIndex !== null) {
      setActiveFolderIndex(null); // go back to all folders
    }
  };

  return (
    <WindowWrapper title="Rashmi's PC" onClose={onClose}>
      {(activeFile || activeFolderIndex !== null) && (
        <button
          onClick={handleBack}
          className="mb-4 bg-gray-700 text-white px-3 py-1 rounded hover:bg-gray-600"
        >
          ← Back
        </button>
      )}

      {activeFile ? (
        <activeFile.component data={activeFile.data} />
      ) : activeFolderIndex !== null ? (
        <div className="flex flex-wrap gap-4">
          {foldersData[activeFolderIndex].files.map((file, i) => (
            <div
              key={i}
              className="cursor-pointer flex flex-col items-center"
              onClick={() => openFile(file)}
            >
              <img src="/icons/ui-icons/file.png" className="w-12 h-12" />
              <p className="text-white text-sm text-center mt-1">{file.name}</p>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex flex-wrap gap-6">
          {foldersData.map((d, index) => (
            <div
              key={index}
              className="cursor-pointer flex flex-col items-center"
              onClick={() => openFolder(index)}
            >
              <img
                src={"/icons/ui-icons/folder.png"}
                alt="folder"
                className="w-12 h-12"
              />
              <p className="mt-1 text-center text-white">{d.name}</p>
            </div>
          ))}
        </div>
      )}
    </WindowWrapper>
  );
};

export default MyPcWindow;
