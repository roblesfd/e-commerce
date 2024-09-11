import React from "react";

interface FooterItemProps {
  children: any | any[];
}

const FooterItem: React.FC<FooterItemProps> = ({ children }) => {
  return <div>{children}</div>;
};

export default FooterItem;
