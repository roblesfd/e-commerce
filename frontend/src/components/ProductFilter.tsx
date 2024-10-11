import React, { useState } from "react";

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
}

interface ProductFilterProps {
  products: Product[];
}

const ProductFilter: React.FC<ProductFilterProps> = ({ products }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-4">
      <div className="mb-4">
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchChange}
          className="w-full p-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
          placeholder="Buscar..."
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredProducts.map((product) => (
          <div key={product.id} className="border p-4 rounded shadow-sm">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-40 object-cover mb-2"
            />
            <h2 className="text-lg font-semibold mb-1">{product.name}</h2>
            <p className="text-gray-700">{product.description}</p>
            <p className="text-primary-600 font-bold">${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductFilter;
