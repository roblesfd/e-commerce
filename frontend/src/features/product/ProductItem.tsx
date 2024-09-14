import { Link } from "react-router-dom";
import Badge from "../../components/Badge";
import StarRating from "../../components/StarsReview";

interface ProductItemProps {
  product: {
    id: number;
    image: string;
    name?: string;
    description?: string;
    price?: string;
    discountedPrice?: string;
    stars?: number;
    promotion?: string;
  };
  itemWidth: number;
  direction?: string;
}

const ProductItem: React.FC<ProductItemProps> = ({
  product,
  itemWidth,
  direction = "col",
}) => {
  const { image, name, description, price, discountedPrice, stars, promotion } =
    product;

  return (
    <div
      className={`flex flex-${direction} justify-center items-center gap-3 flex-shrink-0 text-center`}
      style={{ width: `${itemWidth}%` }}
    >
      <Link to="/">
        <img
          src={image}
          alt={name}
          className="w-36 h-32 object-cover mx-auto"
        />
      </Link>
      <section className="product-info">
        <div>
          {promotion ||
            (stars && (
              <div className="flex justify-between items-center">
                <div>
                  {promotion && (
                    <Badge
                      label={promotion}
                      bgColor="red-500"
                      textColor="white"
                      size="small"
                      roundedSize="medium"
                    />
                  )}
                </div>
                <div className="mb-3">
                  {stars > 0 && (
                    <StarRating rating={stars} maxStarsRating={5} />
                  )}
                </div>
              </div>
            ))}
          <div
            className={`w-full text-${
              direction === "row" ? "left" : "center"
            } mb-2`}
          >
            {name && (
              <Link to="/">
                <h3 className="text-md font-bold">{name}</h3>
              </Link>
            )}
          </div>
        </div>
        <div
          className={`w-full text-${direction === "row" ? "left" : "center"}`}
        >
          {description && (
            <p className="text-gray-700 text-sm">{description}</p>
          )}
        </div>
        <div className="flex justify-start items-center gap-4">
          {discountedPrice && (
            <p className="text-red-800 line-through text-sm">
              {discountedPrice}
            </p>
          )}
          {price && (
            <p className="text-gray-800 font-semibold text-lg">{price}</p>
          )}
        </div>
      </section>
    </div>
  );
};

export default ProductItem;
