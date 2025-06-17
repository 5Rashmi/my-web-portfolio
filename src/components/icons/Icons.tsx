import React, { useRef } from "react";
import { icons } from "../../datas/icons.data";
import Draggable from "react-draggable";

type IconProps = {
  onIconClick: (label: string) => void;
};

const Icons: React.FC<IconProps> = ({ onIconClick }) => {
  const entries = Object.entries(icons);
  const nodeRefs = useRef(entries.map(() => React.createRef<HTMLDivElement>()));

  return (
    <div
      className="grid grid-rows-8 grid-flow-col auto-cols-max"
      style={{ columnGap: "1.5em", rowGap: "1.6em" }}
    >
      {entries.map(([name, path], index) => (
        <Draggable
          key={index}
          nodeRef={nodeRefs.current[index] as React.RefObject<HTMLElement>}
        >
          <div
            ref={nodeRefs.current[index]}
            className="cursor-pointer p-0 m-0"
            onClick={() => onIconClick(name)}
          >
            <img
              src={`/icons/refreshcl_by_tpdk/PNG/${path}.png`}
              alt={name}
              className="w-14 h-14"
            />
            <p className="mt-1 ml-2 truncate text-white">{name}</p>
          </div>
        </Draggable>
      ))}
    </div>
  );
};

export default Icons;
