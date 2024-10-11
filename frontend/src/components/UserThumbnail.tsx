import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type UserThumbnailProps = {
  imageUrl?: string | JSX.Element;
  altText?: string;
  size?: "small" | "medium" | "large";
  name?: string;
  direction?: "col" | "row";
};

const sizeClasses = {
  small: "w-12 h-12",
  medium: "w-16 h-16",
  large: "w-24 h-24",
};

const thumbnaildefault = (
  <FontAwesomeIcon
    icon={faUserCircle}
    className="text-4xl text-secondary-600"
  />
);

const UserThumbnail: React.FC<UserThumbnailProps> = ({
  imageUrl = thumbnaildefault,
  altText = "User avatar",
  size = "medium",
  name,
  direction = "row",
}) => {
  return (
    <div className={`flex flex-${direction} items-center gap-5`}>
      {typeof imageUrl === "string" ? (
        <img
          src={imageUrl}
          alt={altText}
          className={`rounded-full object-cover ${sizeClasses[size]} border border-gray-300`}
        />
      ) : (
        thumbnaildefault
      )}

      {name && <p className="text-sm text-inherit font-medium">{name}</p>}
    </div>
  );
};

export default UserThumbnail;
