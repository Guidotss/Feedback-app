export * from './Sidebar';
export * from './SidebarHeader';
export * from './SidebarBody';
export * from './SidebarFilters';
export * from './SidebarRoadmap'; 


import { SidebarHOCProps } from '@/interface';
import { Sidebar as SidebarHOC } from './Sidebar';
import { SidebarHeader } from './SidebarHeader';
import { SidebarBody } from './SidebarBody';


export const Sidebar:SidebarHOCProps = Object.assign(SidebarHOC, {
    Header: SidebarHeader,
    Body: SidebarBody,
}); 

export default Sidebar;