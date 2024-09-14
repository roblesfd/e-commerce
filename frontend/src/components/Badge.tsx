interface BadgeProps {
  label: string;
  bgColor?: string;
  textColor?: string;
  size?: "small" | "medium" | "large";
  roundedSize?: "small" | "medium" | "large";
}

const Badge: React.FC<BadgeProps> = ({
  label,
  bgColor = "red-400",
  textColor = "white",
  size = "medium",
  roundedSize = "small",
}) => {
  const sizeClasses = {
    small: "text-xs px-2 py-0.5",
    medium: "text-sm px-3 py-1",
    large: "text-base px-4 py-1.5",
  };

  const roundedValue = {
    small: "sm",
    medium: "md",
    large: "lg",
  };

  return (
    <span
      className={`text-${textColor} bg-${bgColor} rounded rounded-${roundedValue[roundedSize]} ${sizeClasses[size]} font-semibold inline-block`}
    >
      {label}
    </span>
  );
};

export default Badge;
