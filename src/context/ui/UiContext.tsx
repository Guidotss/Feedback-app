"use client";

import { createContext } from "react";

interface UiContextProps {
  menuOpen: boolean;
  toggleMenu: () => void;
}

export const UiContext = createContext({} as UiContextProps);
