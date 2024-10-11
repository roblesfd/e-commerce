import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

interface AccordionItem {
  title: string;
  content: React.ReactNode;
}

interface AccordionProps {
  items: AccordionItem[];
  bgColor?: string;
  color?: string;
  size?: "small" | "medium" | "large" | "extraLarge";
  bordered?: boolean;
}
const Accordion: React.FC<AccordionProps> = ({
  items,
  bgColor = "white",
  color = "gray-900",
  size = "medium",
  bordered = false,
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const paddingSize =
    size == "small"
      ? "p-2"
      : size == "medium"
      ? "p-4"
      : size == "large"
      ? "p-6"
      : size == "extraLarge"
      ? "p-8"
      : "";

  return (
    <div className="w-full max-w-xl mx-auto">
      {items.map((item, index) => (
        <div
          key={index}
          className={`${bordered && "border border-gray-500"} rounded `}
        >
          <button
            className={`w-full ${paddingSize} text-left bg-${bgColor} text-${color} font-semibold focus:outline-none flex justify-between items-center`}
            onClick={() => handleToggle(index)}
          >
            {item.title}
            <span className="text-xs">
              {openIndex === index ? (
                <FontAwesomeIcon icon={faChevronUp} />
              ) : (
                <FontAwesomeIcon icon={faChevronDown} />
              )}
            </span>
          </button>
          {openIndex === index && (
            <div className="p-4 bg-white text-gray-800">{item.content}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
