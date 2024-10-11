import React from "react";

interface ProgressBarProps {
  progress: number;
  barColor?: string;
  height?: string;
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  progress,
  barColor = "bg-green-500",
  height = "h-4",
}) => {
  return (
    <div className={`w-full ${height} rounded-md overflow-hidden bg-white`}>
      <div
        className={`bg-${barColor} h-full transition-all duration-300`}
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};

export default ProgressBar;
