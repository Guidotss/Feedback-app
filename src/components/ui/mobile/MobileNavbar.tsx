"use client";
import { useContext } from "react";
import Image from "next/image";
import { CloseIcon, HamburgerIcon } from "../icons";
import { UiContext } from "@/context";

export const MobileNavbar = () => {
  const { toggleMenu, menuOpen } = useContext(UiContext);

  return (
    <div className="flex z-10 h-24">
      <Image
        src="/assets/suggestions/mobile/background-header.png"
        alt="background"
        width={800}
        height={300}
      />
      <div className="flex w-full absolute justify-between p-5 items-center">
        <div className="flex flex-col text-white">
          <h1 className="text-xl font-bold">Frontend Mentor</h1>
          <span className="opacity-70">Feedback Board</span>
        </div>
        <div className="cursor-pointer" onClick={toggleMenu}>
          {!menuOpen ? <HamburgerIcon /> : <CloseIcon />}
        </div>
      </div>
    </div>
  );
};
