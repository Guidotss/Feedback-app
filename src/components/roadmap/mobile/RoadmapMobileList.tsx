"use client";
import { useState } from "react";
import { RoadmapCard } from "../RoadmapCard";

type Option = {
  [key: string]: boolean;
};

export const RoadmapMobileList = () => {
  const [option, setOption] = useState<Option>({
    planned: true,
    "in-Progress": false,
    live: false,
  });

  return (
    <div className="w-full">
      <div className="w-full flex justify-between  text-center gap-2 text-lg font-bold text-button_3 border-b-2 h-12">
        <span
          className={`cursor-pointer ${
            option["planned"] ? "border-b-4 border-planned" : ""
          }`}
          onClick={() =>
            setOption({ "in-Progress": false, live: false, planned: true })
          }
        >
          Planned (2)
        </span>
        <span
          className={`cursor-pointer ${
            option["in-Progress"] ? "border-b-4 border-button_1" : ""
          }`}
          onClick={() =>
            setOption({ "in-Progress": true, live: false, planned: false })
          }
        >
          In-Progress (3)
        </span>
        <span
          className={`cursor-pointer ${
            option["live"] ? "border-b-4 border-live" : ""
          }`}
          onClick={() =>
            setOption({ "in-Progress": false, live: true, planned: false })
          }
        >
          Live (1)
        </span>
      </div>
      {option["planned"] && (
        <div className="flex flex-col  px-10 mt-10">
          <h3 className="text-xl font-bold text-button_3">In-Progress(3)</h3>
          <span className="text-bg_labels_2 font-light">
            Ideas prioritized for research
          </span>
          <RoadmapCard
            id={2}
            title="Add tags for solutions"
            description="Easier to search for solutions based on a specific stack."
            category="Enhancement"
            votes={112}
            comments={2}
            status="Planned"
          />
          <RoadmapCard
            id={8}
            title="Learning paths"
            description="Sequenced projects for different goals to help people improve."
            category="Feature"
            votes={28}
            comments={1}
            status="Planned"
          />
        </div>
      )}
      {option["in-Progress"] && (
        <div className="flex flex-col  px-10 mt-10">
          <h3 className="text-xl font-bold text-button_3">In-Progress(3)</h3>
          <span className="text-bg_labels_2 font-light">
            Currently being developed
          </span>
          <RoadmapCard
            id={9}
            title="One-click portfolio generation"
            description="Add option to generate a portfolio from a GitHub repo."
            category="Enhancement"
            votes={112}
            comments={2}
            status="In-Progress"
          />
          <RoadmapCard
            id={10}
            title="Bookmark challenges"
            description="Be able to bookmark challenges to take later on."
            category="Feature"
            votes={31}
            comments={1}
            status="In-Progress"
          />
          <RoadmapCard
            id={11}
            title="Animated solution screenshots"
            description="Screenshots of solutions with animations don’t display correctly."
            category="Bug"
            votes={9}
            comments={0}
            status="In-Progress"
          />
        </div>
      )}

      {option["live"] && (
        <div className="flex flex-col  px-10 mt-10">
          <h3 className="text-xl font-bold text-button_3">Live(1)</h3>
          <span className="text-bg_labels_2 font-light">Released features</span>
          <RoadmapCard
            id={12}
            title="Add micro-interactions"
            description="Small animations at specific points can add delight."
            category="Enhancement"
            votes={71}
            comments={2}
            status="Live"
          />
        </div>
      )}
    </div>
  );
};
