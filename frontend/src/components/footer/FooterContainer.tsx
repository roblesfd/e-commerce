import React from "react";

interface FooterContainerProps {
  children: React.ReactNode | React.ReactNode[];
  size: "small" | "medium" | "large";
  bottomText?: string;
}

const FooterContainer: React.FC<FooterContainerProps> = ({
  children,
  size = "small",
  bottomText,
}) => {
  const containerHeight =
    size === "small" ? "h-auto" : size === "medium" ? "h-[200px]" : "h-[300px]";

  return (
    <footer
      className={`bg-primary-500 text-white pt-8 pb-4 ${containerHeight}`}
    >
      <div className="container mx-auto h-full px-4 flex flex-col justify-between">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex justify-center mt-6 space-x-4 text-3xl">
            {children}
          </div>
        </div>
        <div className="text-center mb-4 md:mb-0 space-y-4">
          <p className="text-sm">{bottomText}</p>
        </div>
      </div>
    </footer>
  );
};

export default FooterContainer;
