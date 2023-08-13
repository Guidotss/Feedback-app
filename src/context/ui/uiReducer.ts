import { UiState } from "./UiProvider";

type UiActionType = { type: "[UI] - Toggle_Navbar"; payload: boolean };

export const uiReducer = (state: UiState, action: UiActionType): UiState => {
  switch (action.type) {
    case "[UI] - Toggle_Navbar":
      return {
        ...state,
        menuOpen: action.payload,
      };
  }
};
