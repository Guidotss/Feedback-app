import { useState } from "react";
import { status, filters } from "@/constants";

interface UseSelectProps {
  currentCategory?: string;
}

export const useSelect = ({ currentCategory }: UseSelectProps) => {
  const [category, setCategory] = useState<string>(
    currentCategory || "Feature"
  );
  const [isCategoryOpen, setIsCategoryOpen] = useState<boolean>(false);
  const [statusState, setStatusState] = useState<string>("Planned");
  const [isStatusOpen, setIsStatusOpen] = useState<boolean>(false);

  const handleSwitchCategory = (event: MouseEvent, name: string) => {
    event.preventDefault();
    event.stopPropagation();
    setCategory(name);
    setIsCategoryOpen(false);
  };

  const handleSwitchStatus = (event: MouseEvent, name: string) => {
    event.preventDefault();
    event.stopPropagation();
    setStatusState(name);
    setIsStatusOpen(false);
  };

  return {
    category,
    isCategoryOpen,
    statusState,
    isStatusOpen,
    status,
    filters,

    setCategory,
    setIsCategoryOpen,
    setStatusState,
    setIsStatusOpen,
    handleSwitchCategory,
    handleSwitchStatus,
  };
};
