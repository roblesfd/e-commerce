import { faStar, faStarHalfStroke } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface StarRatingProps {
  rating: number;
  maxStarsRating?: number;
  noRatings: number;
  size: "small" | "medium" | "large";
}

const StarRating: React.FC<StarRatingProps> = ({
  rating = 0,
  maxStarsRating = 6,
  noRatings = 0,
  size = "small",
}) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  const emptyStars = maxStarsRating - fullStars - (hasHalfStar ? 1 : 0);
  const sizeValue = {
    small: "sm",
    medium: "md",
    large: "lg",
  };

  return (
    <div className={`flex items-center space-x-1 text-${sizeValue[size]}`}>
      {[...Array(fullStars)].map((_, index) => (
        <FontAwesomeIcon
          key={index}
          icon={faStar}
          className="text-yellow-400"
        />
      ))}

      {hasHalfStar && (
        <FontAwesomeIcon icon={faStarHalfStroke} className="text-yellow-400" />
      )}
      {[...Array(emptyStars)].map((_, index) => (
        <FontAwesomeIcon key={index} icon={faStar} className="text-gray-300" />
      ))}
      <span className="text-xs">({noRatings})</span>
    </div>
  );
};

export default StarRating;
