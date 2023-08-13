import { SidebarBodyProps, SidebarProps } from "@/components/ui/sidebar";

export interface SidebarHOCProps {
  ({ children }: SidebarProps): React.ReactElement | null;
  Header: React.FC;
  Body: React.FC<SidebarBodyProps>;
}
