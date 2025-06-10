import React, { useRef } from "react";
import { icons } from "../../datas/icons.data";
import Draggable from "react-draggable";

const Icons = () => {
  const nodeRefs = useRef(icons.map(() => React.createRef<HTMLDivElement>()));

  return (
    <div className="flex flex-col space-x-4">
      {icons.map((icon, index) => (
        <Draggable
          key={index}
          nodeRef={nodeRefs.current[index] as React.RefObject<HTMLElement>}
        >
          <div ref={nodeRefs.current[index]} className="cursor-pointer p-2">
            <img
              src={`/icons/refreshcl_by_tpdk/PNG/${icon}.png`}
              alt={icon}
              className="w-16 h-16"
            />
          </div>
        </Draggable>
      ))}
    </div>
  );
};

export default Icons;
