import { Dispatch, FC, SetStateAction } from "react";

interface DescribeInputProps {
  setDescripe: Dispatch<SetStateAction<string>>;
  describeInputValue?: string;
}

export const DescribeInput: FC<DescribeInputProps> = ({
  describeInputValue,
  setDescripe,
}) => {
  return (
    <div>
      <p className="font-bold text-lg text-button_3">Feedback Title</p>
      <span className="font-light text-md text-button_3 opacity-[0.9]">
        Add a short, descriptive headline
      </span>
      <input
        className="w-full bg-bg_labels p-4 mt-2 rounded-lg"
        type="text"
        onChange={(event) => setDescripe(event.target.value)}
        value={describeInputValue}
      />
    </div>
  );
};
