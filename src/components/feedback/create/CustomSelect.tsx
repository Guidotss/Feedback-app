import { IconArrowDown, IconArrowUp, IconCheck } from "@/components/ui";
import { Dispatch, FC, SetStateAction } from "react";

interface CustomSelectProps {
  category: string;
  isOpen: boolean;
  title: string;
  description: string;
  selectItems: readonly string[];
  setCategory: Dispatch<SetStateAction<string>>;
  handleSwitchCategory: (event: any, name: string) => void;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

export const CustomSelect: FC<CustomSelectProps> = ({
  category,
  title,
  description,
  isOpen,
  selectItems,
  setCategory,
  handleSwitchCategory,
  setOpen,
}) => {
  return (
    <div className="mt-6">
      <p className="font-bold text-lg text-button_3 tracking-tighter">
        {title}
      </p>
      <span className="font-light text-md text-button_3 opacity-[0.9]">
        {description}
      </span>
      <div
        className="flex flex-col mt-2 w-full bg-bg_labels p-4 rounded-lg"
        onClick={() => setOpen(!isOpen)}
      >
        <div className="flex w-full justify-between items-center">
          <div>{category}</div>
          {!isOpen ? (
            <IconArrowUp color="#4661E6" />
          ) : (
            <IconArrowDown stroke="#4661E6" />
          )}
        </div>
        {isOpen && (
          <div className="absolute mt-10 z-10">
            <div className="absolute bg-bg_comments -ml-10 shadow-lg rounded-xl mt-8 w-[500px]">
              <ul className="flex flex-col">
                {selectItems.map((item, index) => (
                  <div key={index}>
                    <li
                      className="flex items-center justify-between px-5 py-3 hover:bg-gray-100 hover:text-button_1 cursor-pointer"
                      onClick={(event) => {
                        handleSwitchCategory(event, item);
                      }}
                    >
                      <span className="font-light">{item}</span>
                      {item === category && <IconCheck />}
                    </li>
                    <div className="w-full h-[1px] bg-gray-100" />
                  </div>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
