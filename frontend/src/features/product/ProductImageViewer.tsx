import React, { useState } from "react";

interface ProductImageViewerProps {
  images: string[];
}

const ProductImageViewer: React.FC<ProductImageViewerProps> = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(images[0]);
  const [isZoomed, setIsZoomed] = useState(false);

  const handleImageClick = (image: string) => {
    setSelectedImage(image);
  };

  const handleMouseEnter = () => {
    setIsZoomed(true);
  };

  const handleMouseLeave = () => {
    setIsZoomed(false);
  };

  return (
    <div className="flex">
      {/* Columna de miniaturas */}
      <div className="flex flex-col space-y-2">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Producto miniatura ${index + 1}`}
            className={`w-16 h-16 object-cover cursor-pointer border hover:opacity-80 ${
              selectedImage === image
                ? "border-blue-300  border-4"
                : "border-gray-300"
            }`}
            onClick={() => handleImageClick(image)}
          />
        ))}
      </div>

      <div className="ml-4">
        <div
          className="relative w-96 h-96 overflow-hidden border border-gray-300 cursor-pointer"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <img
            src={selectedImage}
            alt="Imagen seleccionada"
            className={`w-full h-full object-cover transition-transform duration-300 ${
              isZoomed ? "scale-150" : "scale-100"
            }`}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductImageViewer;
