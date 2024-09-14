import { createContext } from "react";

interface SidebarContextProps {
  sidebar: boolean;
  setSidebar: React.Dispatch<React.SetStateAction<boolean>>;
}

const SidebarContext = createContext<SidebarContextProps>({
  sidebar: true,
  setSidebar: () => null,
});

export default SidebarContext;
