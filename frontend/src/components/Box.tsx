interface BoxProps {
  children: React.ReactNode[] | React.ReactNode;
  size?: string;
  shadow?: boolean;
}

const Box: React.FC<BoxProps> = ({ children, size = "small", shadow = "" }) => {
  return (
    <div
      className={`${
        size === "small"
          ? "p-1 md:p-2"
          : size === "medium"
          ? "p-2 md:p-6"
          : size === "large"
          ? "p-3 md:p-7"
          : ""
      }  w-full h-full rounded bg-zinc-50 dark:bg-primary-800 ${shadow}-lg`}
    >
      {children}
    </div>
  );
};

export default Box;
