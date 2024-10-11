import React from "react";

interface TabsContentProps {
  children: React.ReactNode[] | React.ReactNode;
  customStyles?: string;
}

const TabsContent: React.FC<TabsContentProps> = ({
  children,
  customStyles = "",
}) => {
  return (
    <div className={`px-6 py-3 ${customStyles} dark:bg-primary-800`}>
      {children}
    </div>
  );
};

export default TabsContent;
