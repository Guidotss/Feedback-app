import React from "react";
import { RoadmapCard } from "./RoadmapCard";

export const RoadmapList = () => {
  return (
    <div className="grid grid-cols-3 gap-8">
      <div className="flex flex-col items-start ">
        <div className="flex flex-col items-start">
          <h1 className="text-xl font-bold text-header mt-2 tracking-tight">
            Planned (2)
          </h1>
          <p className="text-header text-md opacity-[0.9]">
            Ideas prioritized for research
          </p>
        </div>
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
      <div className="flex flex-col items-start">
        <div className="flex flex-col items-start">
          <h1 className="text-xl font-bold text-header mt-2 tracking-tight">
            In-Progress (3)
          </h1>
          <p className="text-header text-md opacity-[0.9]">
            Currently being developed
          </p>
        </div>
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
      <div className="flex flex-col items-start">
        <div className="flex flex-col items-start">
          <h1 className="text-xl font-bold text-header mt-2 tracking-tight">
            Live (1)
          </h1>
          <p className="text-header text-md opacity-[0.9]">Released features</p>
        </div>
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
    </div>
  );
};
