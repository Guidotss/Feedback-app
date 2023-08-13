import { FC } from "react";

export interface SidebarBodyProps {
  children: React.ReactNode | React.ReactNode[];
}

export const SidebarBody: FC<SidebarBodyProps> = ({ children }) => {
  return (
    <div className="flex gap-2 lg:flex-col items-center justify-center">
      {children}
    </div>
  );
};
