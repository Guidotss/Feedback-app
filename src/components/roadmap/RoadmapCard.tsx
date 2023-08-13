import { FC } from "react";
import { IconArrowUp, IconComments } from "../ui";
import Link from "next/link";

interface RoadMapCardProps {
  title: string;
  description: string;
  category: string;
  votes: number;
  comments: number;
  status: string;
  id: number;
}

export const RoadmapCard: FC<RoadMapCardProps> = ({
  title,
  description,
  category,
  votes,
  comments,
  status,
  id,
}) => {
  const setborderColor = () => {
    if (status == "Planned") {
      return "border-t-planned";
    }
    if (status == "Live") {
      return "border-t-live";
    }
    if (status == "In-Progress") {
      return "border-t-in_progress";
    }
  };

  return (
    <div
      className={`flex flex-col bg-bg_comments 2xl:h-[290px] 2xl:w-[390px] lg:w-80 rounded-md mt-10 border-t-[8px] ${setborderColor()} px-6 py-4 `}
    >
      <div className="flex flex-col items-start">
        <div className="flex items-center">
          <div
            className={`bg-${
              status == "Planned" || status == "Live"
                ? status.toLocaleLowerCase()
                : "in_progress"
            } h-2 w-2 rounded-full`}
          />
          <h1 className="text-lg font-normal text-header ml-5 tracking-tight opacity-[0.7]">
            {status}
          </h1>
        </div>
        <div className="flex flex-col mt-2">
          <Link
            href={`/feedback/${id}`}
            className="text-xl font-bold text-header tracking-tight hover:text-button_2 transition-colors duration-300 ease-in-out cursor-pointer"
          >
            {title}
          </Link>
          <p className="text-md font-normal text-header opacity-[0.8]">
            {description}
          </p>
          <div className="mt-4">
            <span className="bg-bg_labels px-3 py-2 rounded-xl text-button_2 font-semibold text-sm">
              {category}
            </span>
          </div>
          <div className="flex justify-between mt-6">
            <span className="bg-bg_labels px-5 py-2 rounded-lg flex items-center gap-2 font-bold tracking-tighter hover:bg-blue-200 transition-all cursor-pointer">
              <IconArrowUp color="#4661E6" />
              {votes}
            </span>
            <div className="flex items-center gap-2 ">
              <IconComments />
              <span className="font-bold text-header">{comments}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
