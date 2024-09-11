import React from "react";

export interface FormHeaderProps {
  title: string;
  size?: "small" | "medium" | "large";
}

const FormHeader: React.FC<FormHeaderProps> = ({ title, size = "small" }) => {
  const fontSize =
    size === "small" ? "text-sm" : size === "medium" ? "text-md" : "text-lg";

  return (
    <h2 className={`text-${fontSize} font-bold text-center mb-6`}>{title}</h2>
  );
};

export default FormHeader;
