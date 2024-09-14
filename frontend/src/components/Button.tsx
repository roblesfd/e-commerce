import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type ButtonVariant =
  | "primary"
  | "secondary"
  | "outline"
  | "ghost"
  | "info"
  | "success"
  | "warning"
  | "danger";
type ButtonSize = "small" | "medium" | "large";

interface ButtonProps {
  label: string;
  onClick?: () => void;
  variant?: ButtonVariant;
  size?: ButtonSize;
  color?: string;
  disabled?: boolean;
  icon?: IconProp;
  customClass?: string;
  rounded?: "small" | "medium" | "large" | "full";
  hoverEffect?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  variant = "primary",
  size = "medium",
  color = "black",
  disabled = false,
  icon,
  customClass = "",
  rounded = "small",
  hoverEffect = false,
}) => {
  const baseClasses = `font-semibold ${
    hoverEffect ? "transition duration-200 ease-in-out" : ""
  } `;

  const variantClasses = {
    primary: "bg-primary-500 text-white hover:bg-primary-600",
    secondary: "bg-secondary-500 text-white hover:bg-secondary-600",
    info: "bg-blue-500 text-white hover:bg-blue-600",
    success: "bg-green-500 text-white hover:bg-green-600",
    warning: "bg-yellow-400 text-white hover:bg-yellow-500",
    danger: "bg-red-500 text-white hover:bg-red-600",
    outline: `border border-2 border-${color} text-${color} hover:bg-${color} hover:text-white`,
    ghost: `bg-transparent text-blue-500 hover:bg-blue-100`,
  };

  const sizeClasses = {
    small: "px-3 py-1 text-sm",
    medium: "px-4 py-2 text-base",
    large: "px-6 py-3 text-lg",
  };

  const disabledClasses = disabled ? "opacity-50 cursor-not-allowed" : "";

  const roundedSize = {
    small: "sm",
    medium: "md",
    large: "lg",
    full: "full",
  };

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${disabledClasses} ${customClass} rounded-${roundedSize[rounded]}`}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
      {icon && <FontAwesomeIcon icon={icon} className="ml-4" />}
    </button>
  );
};

export default Button;
