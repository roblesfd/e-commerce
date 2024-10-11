import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

interface FeatureProps {
  icon: IconDefinition;
  text: string;
  size?: "small" | "medium" | "large"; // Tamaños personalizados
  className?: string;
  direction?: "col" | "row";
  isBordered?: boolean;
}

const Feature: React.FC<FeatureProps> = ({
  icon,
  text,
  size = "medium",
  className = "",
  direction = "col",
  isBordered = false,
}) => {
  const sizeClasses = {
    small: {
      icon: "text-4xl",
      text: "text-sm",
      container: "w-40",
    },
    medium: {
      icon: "text-6xl",
      text: "text-lg",
      container: "w-64",
    },
    large: {
      icon: "text-8xl",
      text: "text-xl",
      container: "w-80",
    },
  };

  const selectedSize = sizeClasses[size];

  return (
    <div
      className={`flex flex-${direction} ${
        direction === "row" ? "items-center" : "align-center"
      } justify-center gap-6 p-4 ${selectedSize.container} ${className} ${
        isBordered &&
        "border border-primary-200 dark:border-primary-50 rounded-md"
      }`}
    >
      <div
        className={`${selectedSize.icon} text-primary-500 ${
          direction === "col" && "mb-4 text-center"
        }`}
      >
        <FontAwesomeIcon icon={icon} />
      </div>
      <p className={`text-center font-medium ${selectedSize.text}`}>{text}</p>
    </div>
  );
};

export default Feature;
