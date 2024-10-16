import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";

export interface DropdownItemProps {
  type?: "link" | "button";
  to?: string;
  label?: string;
  icon?: JSX.Element;
  onClick?: () => void;
}

const DropdownItem: React.FC<DropdownItemProps> = ({
  type = "link",
  to = "",
  label = "",
  icon = "",
  onClick,
}) => {
  let item;

  if (type === "link") {
    item = (
      <Link
        to={to}
        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
      >
        {label}
        {icon}
      </Link>
    );
  } else if (type === "button") {
    item = <Button label={label} onClick={onClick} variant="ghost" />;
  }
  return item;
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
              type={item.type}
              to={item.to}
              icon={item.icon}
              label={item.label}
              onClick={item.onClick}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export { Dropdown, DropdownItem };
