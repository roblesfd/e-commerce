import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link } from "react-router-dom";

interface NavbarProps {
  children: any | any[];
  bgColor: string;
  title: string;
  size: "small" | "medium" | "large";
}

const Navbar: React.FC<NavbarProps> = ({
  children,
  bgColor = "white",
  title,
  size = "small",
}) => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const trimBgColor = bgColor.replace(/-\d+/g, "");
  const paddingSize =
    size === "small" ? "p-2" : size === "medium" ? "p-4" : "p-6";
  const fontSize =
    size === "small" ? "text-sm" : size === "medium" ? "text-md" : "text-lg";

  return (
    <nav className={`bg-${bgColor}  ${paddingSize}  shadow-lg`}>
      <div className="flex justify-between items-center">
        {/* Logo */}
        <section className="text-white text-2xl font-bold pl-6">
          <Link to="/">{title}</Link>
        </section>
        <section className="md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
            className={`text-white hover:bg-${trimBgColor}-700 p-2 rounded-md`}
          >
            <FontAwesomeIcon icon={isMobileMenuOpen ? faClose : faBars} />
          </button>
        </section>
        <section className={`hidden md:flex space-x-4 ${fontSize}`}>
          {children}
        </section>
      </div>

      {/* Mobile Menu (visible when toggled) */}
      {isMobileMenuOpen && (
        <section className="md:hidden flex flex-col space-y-2 p-4">
          {children.map((item, index) => item)}
        </section>
      )}
    </nav>
  );
};

export default Navbar;
