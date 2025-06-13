import type React from "react";
import { useRef } from "react";
import Draggable from "react-draggable";

interface WidgetProps {
  top?: string;
  left?: string;
  className?: string;
  children: React.ReactNode;
}

const Widget: React.FC<WidgetProps> = ({
  top = "",
  left = "",
  className,
  children,
}) => {
  const classes = [
    "absolute flex items-center p-4 bg-black/50 rounded-lg text-white shadow max-w-md z-10",
    top,
    left,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const nodeRef = useRef<HTMLDivElement>(null!);

  return (
    <Draggable nodeRef={nodeRef}>
      <div ref={nodeRef} className={classes}>
        {children}
      </div>
    </Draggable>
  );
};

export default Widget;
