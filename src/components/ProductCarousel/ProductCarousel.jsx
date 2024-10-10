import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"; // Import icons

const products = [
  { id: 1, name: "Product 1", image: "/images/product-1.png" },
  { id: 2, name: "Product 2", image: "/images/product-2.png" },
  { id: 3, name: "Product 3", image: "/images/product-1.png" },
  { id: 4, name: "Product 4", image: "/images/product-2.png" },
  { id: 5, name: "Product 5", image: "/images/product-1.png" },
  { id: 6, name: "Product 6", image: "/images/product-2.png" },
  { id: 7, name: "Product 7", image: "/images/product-1.png" },
  { id: 8, name: "Product 8", image: "/images/product-2.png" },
  { id: 9, name: "Product 9", image: "/images/product-1.png" },
  { id: 10, name: "Product 10", image: "/images/product-2.png" },
];

const ProductCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to handle moving left
  const handleLeftClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? products.length - 5 : prevIndex - 1
    );
  };

  // Function to handle moving right
  const handleRightClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === products.length - 5 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative p-6">
      {/* Heading */}
      <h2 className="text-xl font-bold mb-4">Top Items</h2>

      {/* Product display */}
      <div className="flex overflow-hidden transition-all duration-500 ease-in-out scroll-smooth">
        {products.slice(currentIndex, currentIndex + 5).map((product) => (
          <div
            key={product.id}
            className="flex-shrink-0 w-full sm:w-1/2 md:w-1/3 lg:w-1/5 p-2 flex flex-col items-center"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-auto max-w-40 max-h-40 rounded-full border border-gray-300"
            />
            <h3 className="text-center mt-2">{product.name}</h3>
          </div>
        ))}
      </div>

      {/* Arrow buttons */}
      <div className="absolute top-4 right-10 flex space-x-2">
        <button
          onClick={handleLeftClick}
          className="p-2 bg-gray-700 text-white rounded-full flex items-center justify-center transition-all duration-300 ease-in-out"
          style={{ transform: "rotate(180deg)" }} // Flipping the left arrow
        >
          <FaChevronRight size={20} />
        </button>
        <button
          onClick={handleRightClick}
          className="p-2 bg-gray-700 text-white rounded-full flex items-center justify-center transition-all duration-300 ease-in-out"
        >
          <FaChevronRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default ProductCarousel;
