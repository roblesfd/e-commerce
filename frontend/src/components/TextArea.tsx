import React from "react";

type TextAreaProps = {
  cols?: number;
  rows?: number;
  placeholder?: string;
  bgColor?: string;
  textColor?: string;
  borderColor?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
};

const TextArea: React.FC<TextAreaProps> = ({
  cols = 30,
  rows = 10,
  placeholder = "Escribe aquí...",
  bgColor = "bg-white",
  textColor = "text-black",
  borderColor = "border-gray-300",
  value = "",
  onChange,
}) => {
  return (
    <textarea
      cols={cols}
      rows={rows}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`w-full p-3 ${bgColor} ${textColor} ${borderColor} border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none`}
    />
  );
};

export default TextArea;
