import { useState } from "react";
import SidebarContext from "./sidebarContext";

interface SidebarProviderProps {
  children: React.ReactNode;
}

const SidebarProvider: React.FC<SidebarProviderProps> = ({ children }) => {
  const [sidebar, setSidebar] = useState(true);
  return (
    <SidebarContext.Provider value={{ sidebar, setSidebar }}>
      <div>{children}</div>
    </SidebarContext.Provider>
  );
};

export default SidebarProvider;
