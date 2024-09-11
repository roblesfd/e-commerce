interface ProductItem1Props {
  product: {
    id: number;
    image: string;
    name: string;
    description: string;
    price: string;
  };
  itemWidth: number;
}

const ProductItem1: React.FC<ProductItem1Props> = ({ product, itemWidth }) => {
  return (
    <div
      className="flex-shrink-0 flex items-center justify-center p-4"
      style={{ width: `${itemWidth}%` }}
    >
      <div className="text-center">
        <img
          src={product.image}
          alt={product.name}
          className="w-36 h-32 object-cover mx-auto mb-4"
        />
        <h3 className="text-lg font-bold">{product.name}</h3>
        <p className="text-gray-700 text-sm">{product.description}</p>
        <p className="text-red-800 font-semibold">{product.price}</p>
      </div>
    </div>
  );
};

export default ProductItem1;
