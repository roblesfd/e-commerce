import { Link } from "react-router-dom";
import { Dropdown } from "../Dropdown";

export interface NavItemProps {
  type: "link" | "button" | "dropdown";
  label?: string | JSX.Element;
  to?: string;
  onClick?: () => void;
  dropdownTitle?: string | JSX.Element;
  dropdownItems?: {
    to: string;
    label?: string;
    icon?: JSX.Element;
  }[];
}

const NavbarItem: React.FC<NavItemProps> = ({
  type,
  label,
  to = "/",
  onClick,
  dropdownTitle = "",
  dropdownItems = [],
}) => {
  let itemType;
  switch (type) {
    case "link":
      itemType = (
        <Link to={to} className={`text-white text-center px-3 py-2 rounded-md`}>
          {label}
        </Link>
      );
      break;
    case "button":
      itemType = (
        <button
          onClick={() => {
            onClick?.();
          }}
          className="bg-secondary-500 hover:bg-primary-600 text-white font-bold py-2 px-4 rounded"
        >
          {label}
        </button>
      );
      break;
    case "dropdown":
      itemType = <Dropdown title={dropdownTitle} children={dropdownItems} />;
      break;
    default:
      break;
  }

  return itemType;
};

export default NavbarItem;
