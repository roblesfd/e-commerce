const Box = ({ children, size = "small" }) => {
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
      }  w-full h-full rounded bg-white dark:bg-primary-950 shadow-lg`}
    >
      {children}
    </div>
  );
};

export default Box;
