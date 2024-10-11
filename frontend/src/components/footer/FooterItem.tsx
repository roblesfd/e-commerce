import React from "react";

interface FooterItemProps {
  children: React.ReactNode | React.ReactNode[];
}

const FooterItem: React.FC<FooterItemProps> = ({ children }) => {
  return <div>{children}</div>;
};

export default FooterItem;
