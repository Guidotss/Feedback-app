"use client";

import { useContext } from "react";
import { UiContext } from "@/context";
import { SidebarFilters, SidebarRoadmap } from "../sidebar";
import { filters } from "@/constants";
import "animate.css";

export const MobileSidebar = () => {
  const { menuOpen } = useContext(UiContext);
  return (
    <div
      className={`${
        menuOpen
          ? "z-10 w-80 absolute flex flex-col h-screen items-center backdrop-blur-3xl bg-bg_app animate__animated animate__slideInRight animate__faster"
          : "hidden"
      }`}
    >
      <SidebarFilters filters={filters} />
      <SidebarRoadmap />
    </div>
  );
};
