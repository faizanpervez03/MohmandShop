import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const products = [
  { id: 1, name: "Solar Rechargable", image: "/images/newImg/solar Rechargable/illumicharge.jpg" },
  { id: 2, name: "Accessories", image: "/images/newImg/airpod.jpg" },
  { id: 3, name: "Phone & Tablet", image: "/images/newImg/mobile.jpg" },
  { id: 4, name: "Shoes", image: "/images/newImg/shoes-1.png" },
  { id: 5, name: "Product 5", image: "/images/product-1.png" },
  { id: 6, name: "Product 6", image: "/images/product-2.png" },
  { id: 7, name: "Product 7", image: "/images/product-1.png" },
  { id: 8, name: "Product 8", image: "/images/product-2.png" },
  { id: 9, name: "Product 9", image: "/images/product-1.png" },
  { id: 10, name: "Product 10", image: "/images/product-2.png" },
];

const ProductCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleProducts, setVisibleProducts] = useState(5); // Default to 5 for desktop/tablet

  // Detect screen size and adjust visibleProducts accordingly
  const handleResize = () => {
    if (window.innerWidth < 640) {
      setVisibleProducts(1); // For mobile screens
    } else if (window.innerWidth < 1024) {
      setVisibleProducts(3); // For tablets
    } else {
      setVisibleProducts(5); // For desktops
    }
  };

  // Set visible products on initial load and window resize
  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Function to handle moving left
  const handleLeftClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? products.length - visibleProducts : prevIndex - 1
    );
  };

  // Function to handle moving right
  const handleRightClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === products.length - visibleProducts ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative p-6">
      {/* Heading */}
      <h2 className="text-xl font-bold mb-4">Top Categories</h2>

      {/* Product display */}
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * (100 / visibleProducts)}%)` }}
        >
          {products.map((product) => (
            <div
              key={product.id}
              className="flex-shrink-0 w-full p-2 flex flex-col items-center"
              style={{ flexBasis: `${100 / visibleProducts}%` }} // Set width of each item
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
      </div>

      {/* Arrow buttons */}
      <div className="absolute top-12 -translate-y-1/2 right-10 flex space-x-2">
        <button
          onClick={handleLeftClick}
          className="p-2 bg-gray-700 text-white rounded-full flex items-center justify-center transition-all duration-300 ease-in-out"
        >
          <FaChevronLeft size={20} />
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
