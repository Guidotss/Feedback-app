import { FC } from "react";

interface IconArrowLeftProps {
  stroke?: string;
  className?: string;
}

export const IconArrowLeft: FC<IconArrowLeftProps> = ({
  stroke,
  className,
}) => {
  return (
    <svg
      width="7"
      height="10"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className}`}
    >
      <path
        d="M6 9L2 5l4-4"
        stroke={stroke || "#4661E6"}
        strokeWidth="2"
        fill="none"
        fillRule="evenodd"
      />
    </svg>
  );
};
