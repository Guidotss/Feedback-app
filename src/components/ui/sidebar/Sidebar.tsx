import { FC } from "react";

export interface SidebarProps {
  children: React.ReactElement | React.ReactElement[];
}

export const Sidebar: FC<SidebarProps> = ({ children }) => {
  return (
    <div className="md:flex gap-2 md:items-center md:justify-center lg:flex-col">
      {children}
    </div>
  );
};
