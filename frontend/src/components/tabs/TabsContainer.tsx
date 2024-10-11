interface TabsContainerProps {
  children: React.ReactNode[] | React.ReactNode;
  customStyles?: string;
}

const TabsContainer: React.FC<TabsContainerProps> = ({
  children,
  customStyles = "",
}) => {
  return (
    <div
      className={`flex space-x-4 border-b ${customStyles} shadow-md dark:bg-primary-800`}
    >
      {children}
    </div>
  );
};

export default TabsContainer;
