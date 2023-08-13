import { FC } from "react";

interface IconPlusProps {
  className?: string;
  strokeWidth?: number;
  tspan?: {
    x: number;
    y: number;
  };
}

export const IconPlus: FC<IconPlusProps> = ({
  className,
  strokeWidth,
  tspan,
}) => {
  return (
    <svg
      width="20"
      height="20"
      xmlns="http://www.w3.org/2000/svg"
      className={className || "text-2xl mr-2 font-bold"}
    >
      <text
        transform="translate(-24 -20)"
        fill="#F2F4FE"
        fontFamily="Jost-Bold, Jost"
        strokeWidth={strokeWidth || ".5"}
      >
        <tspan x={tspan?.x || "24"} y={tspan?.y || "39.5"}>
          +
        </tspan>
      </text>
    </svg>
  );
};
