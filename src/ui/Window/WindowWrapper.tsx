import React, { useRef, useState, type ReactNode } from "react";
import Draggable from "react-draggable";

type WindowWrapperProps = {
  title: string;
  onClose: () => void;
  children: ReactNode;
};

const WindowWrapper: React.FC<WindowWrapperProps> = ({
  title,
  onClose,
  children,
}) => {
  const nodeRef = useRef<HTMLDivElement>(null!);
  const [isMinimized, setIsMinimized] = useState(false);
  const [isMaximized, setIsMaximized] = useState(false);

  return (
    <Draggable nodeRef={nodeRef} handle=".title-bar" disabled={isMaximized}>
      <div
        ref={nodeRef}
        className={`z-50 ${
          isMaximized
            ? "fixed top-0 left-0 w-screen h-screen"
            : "absolute top-20 left-20 w-[500px]"
        } bg-gray-800 rounded-lg shadow-xl text-white overflow-hidden transition-all duration-300`}
      >
        <div className="title-bar flex items-center justify-between bg-gradient-to-r from-gray-800 to-gray-600 text-white p-2 px-4 rounded-t-lg shadow-md cursor-move">
          <span className="font-bold">{title}</span>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => {
                setIsMinimized((prev) => {
                  if (!prev) setIsMaximized(false);
                  return !prev;
                });
              }}
              className="w-4 h-4"
            >
              <img src="/icons/ui-icons/minus.png" alt="Minimize" />
            </button>

            <button
              onClick={() => {
                setIsMaximized((prev) => {
                  if (!prev) setIsMinimized(false);
                  return !prev;
                });
              }}
              className="w-4 h-4"
            >
              <img src="/icons/ui-icons/full-screen.png" alt="Maximize" />
            </button>

            <button onClick={onClose} className="w-5 h-5">
              <img src="/icons/ui-icons/delete.png" alt="Close" />
            </button>
          </div>
        </div>

        {!isMinimized && (
          <div className="p-4 bg-purple-700/10 backdrop-blur-sm border-t border-purple-500/20">
            {children}
          </div>
        )}
      </div>
    </Draggable>
  );
};

export default WindowWrapper;
