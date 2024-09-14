import { useState } from "react";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface SidebarProps {
  children: React.ReactNode[];
  isExtensible: boolean;
  bgColor: string;
}

const Sidebar: React.FC<SidebarProps> = ({
  children,
  isExtensible,
  bgColor = "white",
}) => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`flex h-auto ${
        isOpen || isExtensible ? "w-48" : "w-20"
      } transition-width duration-300 bg-${bgColor}`}
    >
      <div className="flex flex-col w-full">
        {!isExtensible && (
          <button
            className="text-white p-4 focus:outline-none hover:bg-primary-700  focus:ring-2 focus:ring-inset focus:ring-white"
            onClick={toggleSidebar}
          >
            {isOpen ? (
              <FontAwesomeIcon icon={faChevronLeft} className="w-4 h-4" />
            ) : (
              <FontAwesomeIcon icon={faChevronRight} className="w-4 h-4" />
            )}
          </button>
        )}
        <div className="mt-4 px-2">
          <ul className="space-y-2 overflow-scroll">{children}</ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
