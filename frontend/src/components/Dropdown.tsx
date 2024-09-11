import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

interface DropdownItemProps {
  to: string;
  label?: string;
  icon?: JSX.Element;
}

const DropdownItem: React.FC<DropdownItemProps> = ({ to, label, icon }) => {
  return (
    <Link
      to={to}
      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
    >
      {label}
      {icon}
    </Link>
  );
};

type DropdownProps = {
  title: string | JSX.Element;
  children: DropdownItemProps[];
};

const Dropdown: React.FC<DropdownProps> = ({ title, children }) => {
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);

  const toggleUserDropdown = () => {
    setIsUserDropdownOpen(!isUserDropdownOpen);
  };

  return (
    <div>
      <button
        onClick={toggleUserDropdown}
        className="text-white hover:bg-primary-400 px-3 py-2 rounded-full focus:outline-none"
      >
        {title}
      </button>
      {isUserDropdownOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-20">
          {children.map((item, index) => (
            <DropdownItem
              key={index}
              to={item.to}
              icon={item.icon}
              label={item.label}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export { Dropdown, DropdownItem };
