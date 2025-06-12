import React, { useRef } from "react";
import Draggable from "react-draggable";
import { windowComponents } from "../../datas/icons.data";

type WindowManagerProps = {
  openWindows: string[];
  closeWindow: (label: string) => void;
};
const WindowManager: React.FC<WindowManagerProps> = ({
  openWindows,
  closeWindow,
}) => {
  const nodeRefs = useRef<HTMLDivElement>(null!);

  return (
    <>
      {openWindows.map((label, index) => {
        const WindowComponent = windowComponents[label];
        if (!WindowComponent) return null;

        return (
          <Draggable nodeRef={nodeRefs} key={label + index}>
            <div ref={nodeRefs} className="absolute top-0 left-0 z-30">
              <WindowComponent key={label} onClose={() => closeWindow(label)} />
            </div>
          </Draggable>
        );
      })}
    </>
  );
};

export default WindowManager;
