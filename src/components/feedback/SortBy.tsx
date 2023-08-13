"use client";

import { FC, useContext, useEffect, useState } from "react";
import { IconArrowUp, IconArrowDown, IconCheck } from "@/components/ui";
import { FeedBackContext } from "@/context";

interface SortByProps {
  className?: string;
  sortBy: readonly { id: number; name: string }[];
}

export const SortBy: FC<SortByProps> = ({ className, sortBy }) => {
  const [sort, setSort] = useState({ sort: "Most Upvotes", isOpen: false });
  const { setSortBy } = useContext(FeedBackContext);

  useEffect(() => {
    setSortBy(sort.sort);
  }, [sort.sort]);

  return (
    <div className={`flex ${className}`}>
      <span className="text-bg_app opacity-[0.9] mr-1 md:mr-2">Sort by:</span>
      <span
        className="font-bold cursor-pointer text-bg_app opacity-[0.9]"
        onClick={() => setSort({ ...sort, isOpen: !sort.isOpen })}
      >
        {sort.sort}
      </span>
      <button
        className="md:ml-5 text-bg_labels_2"
        onClick={() => setSort({ ...sort, isOpen: !sort.isOpen })}
      >
        {sort.isOpen ? <IconArrowUp /> : <IconArrowDown />}
      </button>
      {sort.isOpen && (
        <div className="absolute bg-bg_comments md:left-1/2 shadow-lg rounded-xl mt-16 w-[300px]">
          <ul className="flex flex-col">
            {sortBy.map((item) => (
              <div key={item.id}>
                <li
                  className="flex items-center justify-between px-5 py-3 hover:bg-gray-100 hover:text-button_1 cursor-pointer"
                  onClick={() => setSort({ sort: item.name, isOpen: false })}
                >
                  <span className="font-light">{item.name}</span>
                  {item.name === sort.sort && <IconCheck />}
                </li>
                <div className="w-full h-[1px] bg-gray-100" />
              </div>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
