import { faStar, faStarHalfStroke } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

interface StarRatingProps {
  rating: number;
  maxStarsRating?: number;
  noRatings?: number;
  size?: "extraSmall" | "small" | "medium" | "large";
  isEditable?: boolean;
}

const StarRating: React.FC<StarRatingProps> = ({
  rating = 0,
  maxStarsRating = 5,
  noRatings,
  size = "small",
  isEditable = false,
}) => {
  const [currentRating, setCurrentRating] = useState(rating);

  const fullStars = Math.floor(isEditable ? currentRating : rating);
  const hasHalfStar = !isEditable && rating % 1 !== 0;
  const emptyStars = maxStarsRating - fullStars - (hasHalfStar ? 1 : 0);

  const sizeValue = {
    extraSmall: "xs",
    small: "sm",
    medium: "md",
    large: "lg",
  };

  const handleStarClick = (index: number) => {
    if (isEditable) {
      setCurrentRating(index + 1); // Actualiza el rating según la estrella clickeada
    }
  };

  return (
    <div className={`flex items-center space-x-1 text-${sizeValue[size]}`}>
      {/* Estrellas completas */}
      {[...Array(fullStars)].map((_, index) => (
        <FontAwesomeIcon
          key={index}
          icon={faStar}
          className="text-yellow-400 cursor-pointer"
          onClick={() => handleStarClick(index)} // Detecta el clic solo si es editable
        />
      ))}

      {/* Media estrella */}
      {hasHalfStar && (
        <FontAwesomeIcon icon={faStarHalfStroke} className="text-yellow-400" />
      )}

      {/* Estrellas vacías */}
      {[...Array(emptyStars)].map((_, index) => (
        <FontAwesomeIcon
          key={index}
          icon={faStar}
          className="text-gray-300 cursor-pointer"
          onClick={() => handleStarClick(fullStars + index)} // Detecta el clic solo si es editable
        />
      ))}

      {/* Mostrar el número de valoraciones si se proporciona */}
      {noRatings && <span className="text-xs">({noRatings})</span>}
    </div>
  );
};

export default StarRating;
