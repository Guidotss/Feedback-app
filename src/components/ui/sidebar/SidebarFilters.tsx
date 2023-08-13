"use client";
import { FeedBackContext } from "@/context";
import { FC, useContext } from "react";

interface SidebarFiltersProps {
  filters: readonly string[];
}

export const SidebarFilters: FC<SidebarFiltersProps> = ({ filters }) => {
  const { setFilters } = useContext(FeedBackContext);

  return (
    <div className="flex gap-2 mt-6 bg-bg_comments h-[180px] w-[280px] rounded-lg flex-wrap items-center justify-start p-4">
      {filters.map((filter) => (
        <div key={filter} className="ml-2">
          <div>
            <button
              className="bg-bg_labels p-1 px-5 rounded-xl hover:bg-button_2 hover:text-slate-50 transition-all text-lg text-button_2 font-semibold"
              onClick={() => setFilters(filter)}
            >
              {filter}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
