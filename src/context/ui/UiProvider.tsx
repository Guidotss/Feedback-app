"use client";
import { FC, useReducer } from "react";
import { UiContext } from "./UiContext";
import { uiReducer } from "./uiReducer";

export interface UiState {
  menuOpen: boolean;
}

interface UiProviderProps {
  children: React.ReactNode;
}

const UI_INITIAL_STATE: UiState = {
  menuOpen: false,
};

export const UiProvider: FC<UiProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE);

  const toggleMenu = () => {
    dispatch({ type: "[UI] - Toggle_Navbar", payload: !state.menuOpen });
  };

  return (
    <UiContext.Provider
      value={{
        ...state,
        toggleMenu,
      }}
    >
      {children}
    </UiContext.Provider>
  );
};
