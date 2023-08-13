import { FC } from "react";

interface IconArrowDownProps {
  stroke?: string;
}

export const IconArrowDown: FC<IconArrowDownProps> = ({ stroke }) => {
  return (
    <svg width="10" height="7" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M1 1l4 4 4-4"
        stroke={stroke || "#FFFFFF"}
        strokeWidth="2"
        fill="none"
        fillRule="evenodd"
      />
    </svg>
  );
};
